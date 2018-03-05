import React, {Component} from 'React'
class Footer extends Component {
  render () {
    return (
      <nav className='bar-tab'>
        <li className='nav-item actived' onClick={this.props.changeBookType} ref={item => this.bookItem = item}>
          <i className='iconfont icon-book' />
          <span className='nav-item-words'>图书</span>
        </li>
        <li className='nav-item' onClick={this.props.changeMovieType} ref={item => this.movieItem = item}>
          <i className='iconfont icon-movie' />
          <span className='nav-item-words'>电影</span>
        </li>
        <li className='nav-item' onClick={this.props.changeMusicType} ref={item => this.musicItem = item}>
          <i className='iconfont icon-music' />
          <span className='nav-item-words'>音乐</span>
        </li>
      </nav>
    )
  }
}
export default Footer
