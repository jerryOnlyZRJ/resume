import React, {Component} from 'React'
import CONFIG from '../../config/CONFIG'
import indexController from '../../controllers/indexController'
class Header extends Component {
  searchForData () {
    const keyword = this.input.value
    const start = 0
    const options = {keyword, start}
    indexController.getData(this.props.type, options).then(data => {
      this.props.afterSearch(data, keyword)
    }).catch(err => {
      console.log(err)
    })
  }
  render () {
    const {bookPlaceholder, moviePlaceholder, musicPlaceholder} = CONFIG
    const placeHolder = this.props.type === 0 ? bookPlaceholder : (this.props.type === 1 ? moviePlaceholder : musicPlaceholder)
    return (
      <header className='bar-header'>
        <div className='input-container'>
          <i className='iconfont icon-magnifier' />
          <input ref={input => this.input = input} type='text' placeholder={placeHolder} />
          <button className='search-btn' onClick={this.searchForData.bind(this)}>搜索</button>
        </div>
      </header>
    )
  }
}
export default Header
