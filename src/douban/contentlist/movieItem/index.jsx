import React, {Component} from 'React'
class movieItem extends Component {
  choiceThis () {
    this.props.choiceItem(this.props.index)
  }
  render () {
    const {title, year, genres, casts, image, average} = this.props.data
    return (
      <li className='content-item' onClick={this.choiceThis.bind(this)}>
        <div className='item-img'>
          <img src={image} alt='' referrerPolicy ="never" />
        </div>
        <div className='item-introduction'>
          <span className='intro-info movie-title'>{title} - {year}</span>
          <span className='intro-info'>
            {genres.map((item, index) => {
		                    		return <span className='movie-tags' key={index}>{item}</span>
		                    	})}
          </span>
          <span className='intro-info movie-actors'>
            {casts.map((item, index) => {
		                    		return <span className='actor-item' key={index}>{item.name}</span>
		                    	})}
          </span>
          <span className='intro-info'>评分：{average}</span>
        </div>
      </li>
    )
  }
}
export default movieItem
