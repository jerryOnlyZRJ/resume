
import React, {Component} from 'react'
import BookItem from './bookItem'
import MovieItem from './movieItem'
import MusicItem from './musicItem'
import indexController from '../../controllers/indexController'
class ContentList extends Component {
  constructor(){
    super()
    this.hasGetMore = false
  }
  scrollEve(){
    if(this.list.scrollHeight - this.list.offsetHeight <= this.list.scrollTop + 20 && !this.hasGetMore ){
      this.loader.childNodes[0].classList.add('loader')
      this.hasGetMore = true
      this.getMore(this.props.start, this.props.keyword)
    }
  }
  getMore(start, keyword){
    const options = {keyword, start}
    indexController.getData(this.props.type, options).then(data => {
      // console.log(data)
      this.loader.childNodes[0].classList.remove('loader')
      this.hasGetMore = false
      this.props.afterGetMore(data)
    }).catch(err => {
      console.log(err)
    })
  }
  render () {
    if(this.props.data.length === 0){
      return(
        <ul className='content-list' ref={list => this.list = list} onScroll={this.scrollEve.bind(this)}>
              <span className='content-null'>Sorry！没有更多了。。。</span>
        </ul>
        )
    }
    if (this.props.type === 0) {
      return (
        <ul className='content-list' ref={list => this.list = list} onScroll={this.scrollEve.bind(this)}>
          {this.props.data.map((item, index) => {
            return <BookItem choiceItem={this.props.choiceItem} data={item} key={index} index={index} />
          })}
          <div className="load7" ref={loader => this.loader = loader}>
            <div>下拉加载更多...</div>
        </div>
        </ul>
      )
    } else if (this.props.type === 1) {
      return (
        <ul className='content-list' ref={list => this.list = list} onScroll={this.scrollEve.bind(this)}>
          {this.props.data.map((item, index) => {
            return <MovieItem choiceItem={this.props.choiceItem} data={item} key={index} index={index} />
          })}
          <div className="load7" ref={loader => this.loader = loader}>
            <div>下拉加载更多...</div>
        </div>
        </ul>
      )
    } else {
      return (
        <ul className='content-list' ref={list => this.list = list} onScroll={this.scrollEve.bind(this)}>
          {this.props.data.map((item, index) => {
            return <MusicItem choiceItem={this.props.choiceItem} data={item} key={index} index={index} />
          })}
          <div className="load7" ref={loader => this.loader = loader}>
            <div>下拉加载更多...</div>
        </div>
        </ul>
      )
    }
  }
}
export default ContentList
