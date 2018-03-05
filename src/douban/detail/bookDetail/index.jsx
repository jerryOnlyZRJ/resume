import React, {Component} from 'React'
class BookDetail extends 	Component {
  render () {
    const {author, average, catalog, id, image, price, pubdate, publisher, subtitle, summary, tags} = this.props.data
		// render的return内只能包含一个根元素
    return (
      <div className='detail-body'>
        <section className='content-item'>
          <div className='item-img'>
            <img src={image} alt='' />
          </div>
          <div className='item-introduction'>
            <span className='intro-info'>名称：{subtitle}</span>
            <span className='intro-info'>作者：{author[0]}</span>
            <span className='intro-info'>出版社：{publisher}</span>
            <span className='intro-info'>日期：{pubdate}</span>
            <span className='intro-info'>评分：{average}</span>
            <span className='intro-info'>价钱：￥{price}</span>
            <span className='intro-info'>
              {tags.map((item, index) => {
			                    			return <span className='book-tags' key={index}>{item.name}</span>
			                    		})}
            </span>
          </div>
        </section>
        <section className='detail-catalog'>
          <h2>序言</h2>
          <p>{catalog}</p>
        </section>
        <section className='detail-summary'>
          <h2>简介</h2>
          <p>{summary}</p>
        </section>
      </div>
    )
  }
}
export default BookDetail
