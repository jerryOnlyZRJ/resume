import React, { Component } from 'React'
import CONFIG from '../../config/CONFIG'
import indexController from '../../controllers/indexController'
/**
 * 转义 HTML 特殊字符
 * @param {String} str
 */
function htmlEncode(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}
class Header extends Component {
    searchForData() {
        //永远不要相信用户的输入
        const keyword = htmlEncode(this.input.value)
        const start = 0
        const options = { keyword, start }
        indexController.getData(this.props.type, options).then(data => {
            this.props.afterSearch(data, keyword)
        }).catch(err => {
            console.log(err)
        })
    }
    render() {
        const { bookPlaceholder, moviePlaceholder, musicPlaceholder } = CONFIG
        const placeHolder = this.props.type === 0 ? bookPlaceholder : (this.props.type === 1 ? moviePlaceholder : musicPlaceholder)
        return ( <
            header className = 'bar-header' >
            <
            div className = 'input-container' >
            <
            i className = 'iconfont icon-magnifier' / >
            <
            input ref = { input => this.input = input } type = 'text'
            placeholder = { placeHolder }
            /> <
            button className = 'search-btn'
            onClick = { this.searchForData.bind(this) } > 搜索 < /button> < /
            div > <
            /header>
        )
    }
}
export default Header