import React, { Component } from 'react'
import './style.css'
import books from '../models/books'
import movies from '../models/movies'
import musics from '../models/musics'
import Header from './header'
import Footer from './footer'
import ContentList from './contentlist'
import Detail from './detail'

class App extends Component {
    constructor() {
        super()
        this.state = {
            type: 0,
            start: 10,
            data: books.slice(0, 10),
            itemIndex: 0,
            detailShow: false,
            keyword: null
        }
    }
    afterSearch(response, keyword) {
        this.setState({
            data: response,
            keyword: keyword,
            start: 10
        })
        this.contentlist.list.scrollTop = 0
    }
    afterGetMore(response) {
        this.setState({
            data: this.state.data.concat(response),
            start: this.state.start += 10
        })
    }
    removeActive() {
        this.footer.bookItem.classList.remove('actived')
        this.footer.musicItem.classList.remove('actived')
        this.footer.movieItem.classList.remove('actived')
    }
    changeBookType() {
        this.setState({
            data: books.slice(0, 10),
            type: 0,
            start: 10
        })
        this.contentlist.list.scrollTop = 0
        this.removeActive()
        this.footer.bookItem.classList.add('actived')
    }
    changeMovieType() {
        this.setState({
            data: movies.slice(0, 10),
            type: 1,
            start: 10
        })
        this.contentlist.list.scrollTop = 0
        this.removeActive()
        this.footer.movieItem.classList.add('actived')
    }
    changeMusicType() {
        this.setState({
            data: musics.slice(0, 10),
            type: 2,
            start: 10
        })
        this.contentlist.list.scrollTop = 0
        this.removeActive()
        this.footer.musicItem.classList.add('actived')
    }
    choiceItem(index) {
        this.setState({
            itemIndex: index,
            detailShow: true
        })
    }
    closeDetail() {
        this.setState({
            detailShow: false
        })
    }
    render() {
        return ( <
            div className = 'app' >
            <
            Header type = { this.state.type } afterSearch = { this.afterSearch.bind(this) }
            /> <
            ContentList start = { this.state.start } afterGetMore = { this.afterGetMore.bind(this) } keyword = { this.state.keyword } choiceItem = { this.choiceItem.bind(this) } ref = { contentlist => this.contentlist = contentlist } type = { this.state.type } data = { this.state.data }
            /> <
            Footer ref = { footer => this.footer = footer } changeBookType = { this.changeBookType.bind(this) } changeMovieType = { this.changeMovieType.bind(this) } changeMusicType = { this.changeMusicType.bind(this) }
            /> <
            Detail type = { this.state.type } data = { this.state.data[this.state.itemIndex] } detailShow = { this.state.detailShow } closeDetail = { this.closeDetail.bind(this) }
            /> <
            /div>
        )
    }
}

module.exports = App