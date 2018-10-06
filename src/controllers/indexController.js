import CONFIG from '../config/config'
import Data from '../models/indexModel'
import arrangeData from './arrangeData'
/**
 * indexController对象
 * 封装各类数据提取接口，直接暴露给index界面调用
 */
class indexController {
    /**
     * [getBookData 获取图书搜索数据]
     * @param  Object   API参数对象options = {keyword, start}
     * @return Promise           PromiseValue为整理后的data数据
     * 下同
     */
  getBookData (options) {
    let bookData
    const url = CONFIG.bookUrl
    const keyword = options.keyword
    const count = CONFIG.count
    const start = options.start
        // options对象构建(ES6)
    const args = { url, keyword, count, start }
    return Data.getData(args).then(data => {
      bookData = arrangeData('book', data)
      return bookData
    }).catch(err => {
      console.log(err)
    })
  }
  getMusicData (options) {
    let musicData
    const url = CONFIG.musicUrl
    const keyword = options.keyword
    const count = CONFIG.count
    const start = options.start
    const args = { url, keyword, count, start }
    return Data.getData(args).then(data => {
      musicData = arrangeData('music', data)
      return musicData
    }).catch(err => {
      console.log(err)
    })
  }
  getMovieData (options) {
    let movieData
    const url = CONFIG.movieUrl
    const keyword = options.keyword
    const count = CONFIG.count
    const start = options.start
    const args = { url, keyword, count, start }
    return Data.getData(args).then(data => {
      movieData = arrangeData('movie', data)
      return movieData
    }).catch(err => {
      console.log(err)
    })
  }
    /**
     * [getData 数据获取接口]
     * @param  Number type   数据类型 0:Book,1:Movie,2:Music
     * @param  Object options API参数对象 {keyword, start}
     * @return Promise       数据返回对象
     */
  getData (type, options) {
    return (type === 0 ? this.getBookData(options) : (type === 1 ? this.getMovieData(options) : this.getMusicData(options)))
  }
}
export default new indexController()
