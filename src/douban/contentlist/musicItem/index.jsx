import React, {Component} from 'React'
class MusicItem extends 	Component {
  choiceThis () {
    this.props.choiceItem(this.props.index)
  }
  render () {
    const {image, title, author, average} = this.props.data
    return (
      <li className='content-item' onClick={this.choiceThis.bind(this)}>
        <div className='item-img'>
          <img src={image} alt='' />
        </div>
        <div className='item-introduction'>
          <span className='music-info'>名称：{title}</span>
          <span className='music-info'>
		                    	作者：{author[0].name}
          </span>
          <span className='music-info'>评分：{average}</span>
        </div>
      </li>
    )
  }
}
export default MusicItem
