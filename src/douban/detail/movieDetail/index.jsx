import React, {Component} from 'React'
class MovieDetail extends Component {
  render () {
    const {title, average, casts, directors, genres, image, year} = this.props.data
    return (
      <div className='detail-body'>
        <section className='movie-img-box'>
          <img src={image} alt='' />
        </section>
        <section className='detail-summary'>
          <h2>简介</h2>
          <div>名称：{title}
            {genres.map((item, index) => {
		                    		return <span className='movie-tags' key={index}>{item}</span>
		                    	})}
          </div>
          <div>上映时间：{year}</div>
          <div>导演：{directors[0].name}</div>
        </section>
        <section className='actors-box'>
          <h2>演员</h2>
          <div className='detail-actors'>
            {casts.map((item, index) => {
			                    		return (
  <figure className='actor-detail' key={index}>
    <img src={item.avatars.small} alt='' className='picture-box' />
    <span className='actor-name'>{item.name}</span>
  </figure>
			                    		)
		                    		 })}
          </div>
        </section>
      </div>
    )
  }
}
export default MovieDetail
