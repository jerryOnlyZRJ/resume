import React, {Component} from 'React'
class BookItem extends Component {
  choiceThis () {
    this.props.choiceItem(this.props.index)
  }
  render () {
    const {subtitle, author, tags, pubdate, average, image} = this.props.data
    return (
      <li className='content-item' onClick={this.choiceThis.bind(this)}>
        <div className='item-img'>
          <img src={image} alt='' />
        </div>
        <div className='item-introduction'>
          <span className='intro-info'>名称：{subtitle}</span>
          <span className='intro-info'>
            {tags.map((item, index) => {
		                    			return <span className='book-tags' key={index}>{item.name}</span>
		                    		})}
          </span>
          <span className='intro-info'>作者：{author[0]}</span>
          <span className='intro-info'>评分：{average}</span>
          <span className='intro-info'>时间：{pubdate}</span>
        </div>
      </li>
    )
  }
}
export default BookItem
