import 'babel-register'
import 'babel-polyfill'
import fetchJsonp from 'fetch-jsonp'
/**
 * Data 数据获取对象
 * 直接与服务接口交互，提取原始数据
 * 暴露getData接口，用于传递数据参数
 */
class Data {
    /**
     * [getData 原始数据提取方法]
     * @param  Object options = {url, keyword, count,start}
     * @return Promise     PromiseValue为原始数据的Promise
     */
  getData (options) {
        // option对象析构(ES6)
    const { url, keyword, count, start } = options
    let argsStr = `?q=${encodeURIComponent(keyword)}&count=${count}&start=${start}`
    return fetchJsonp(url + argsStr)
            .then(function (response) {
              return response.json()
            }).then(function (json) {
              return json
            }).catch(function (ex) {
              console.log('parsing failed', ex)
            })
  }
}
export default new Data()
