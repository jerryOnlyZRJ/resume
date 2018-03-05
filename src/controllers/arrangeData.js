/**
 * [arrangeData 数据对象整理方法]
 * @param  {[type]} dataType 数据类型（book、movie、music）
 * @param  {[type]} data     原始数据
 * @return {[type]}          过滤无用属性后的数据对象
 */
let arrangeData = function (dataType, data) {
  if (dataType === 'book') {
    return data.books.map(item => {
      return {
        subtitle: item.subtitle,
        author: item.author.slice(0, 3),
        average: item.rating.average,
        pubdate: item.pubdate,
        publisher: item.publisher,
        image: item.images.small,
        tags: item.tags.slice(0, 3),
        price: item.price,
        catalog: item.catalog,
        summary: item.summary,
        id: item.id
      }
    })
  } else if (dataType === 'movie') {
    return data.subjects.map(item => {
      return {
        title: item.title,
        year: item.year,
        genres: item.genres.slice(0, 3),
        casts: item.casts,
        average: item.rating.average,
        image: item.images.small,
        directors: item.directors,
        id: item.id
      }
    })
  } else if (dataType === 'music') {
    return data.musics.map(item => {
      return {
        title: item.title,
        author: item.author,
        average: item.rating.average,
        publisher: item.attrs.publisher,
        image: item.image,
        pubdate: item.attrs.pubdate,
        summary: item.alt_title,
        tags: item.tags.slice(0, 3),
        id: item.id
      }
    })
  }
}
export default arrangeData
