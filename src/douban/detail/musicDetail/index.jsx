import React, {Component} from 'react'
class MusicDetail extends Component {
  render () {
    const {author, average, image, pubdate, publisher, summary, tags, title} = this.props.data
    return (
      <div className='detail-body'>
        <section className='content-item'>
          <div className='item-img'>
            <img src={image} alt='' />
          </div>
          <div className='item-introduction'>
            <span className='intro-info'>名称：{title}</span>
            <span className='intro-info'>
              {tags.map((item, index) => {
			                    			return <span className='book-tags' key={index}>{item.name}</span>
			                    		})}
            </span>
            <span className='intro-info'>作者：
		                        		{author.map(item => {
		                        			return `${item.name} `
		                        		})}
            </span>
            <span className='intro-info'>发布商：{publisher}</span>
            <span className='intro-info'>发布时间：{pubdate}</span>
            <span className='intro-info'>评分：{average}</span>
          </div>
        </section>
        <section className='detail-catalog'>
          <h2>简介</h2>
          <p>{summary}</p>
        </section>
        <section className='detail-summary'>
          <h2>内容</h2>
          <p>{title}</p>
        </section>
      </div>
    )
  }
}
export default MusicDetail
