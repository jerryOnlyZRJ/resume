import React, {Component} from 'react'
import BookDetail from './bookDetail'
import MovieDetail from './movieDetail'
import MusicDetail from './musicDetail'
class Detail extends Component {
  render () {
    const type = this.props.type
    let showCls = this.props.detailShow ? '' : 'hide'
    return (
      <div className={'content-detail ' + showCls}>
        <header className='detail-header'>
          <span className='iconfont icon-back' onClick={this.props.closeDetail} >首页</span>
        </header>
        {type === 0 ? <BookDetail data={this.props.data} /> : type === 1 ? <MovieDetail data={this.props.data} /> : <MusicDetail data={this.props.data} />}
      </div>
    )
  }
}
export default Detail
