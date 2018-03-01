require('./turn.min.js');
require('../styles/x-selfinfo.css')
//x-selfinfo
xtag.register('x-selfinfo', {
    content: `<div class="main">
			<div class="user-avatar">
				<img src="http://ac-iiyq8wju.clouddn.com/f81157e67c039ec9f5f4.png" alt="">
			</div>
			<h1 class="user-name">
				Jerry
			</h1>
			<div class="enjoyment">
				念经(coding)、参禅(thinking)、化缘(searching)
			</div>
			<div class="contact">
				<ul class="contact-list">
					<li class="contact-item iconfont icon-email"><a href="mailto:920997736@qq.com">920997736@qq.com</a></li>
					<li class="contact-item iconfont icon-phone">13275063516</li>
					<li class="contact-item iconfont icon-github"><a href="https://github.com/jerryOnlyZRJ">https://github.com/jerryOnlyZRJ</a></li>
				</ul>
			</div>
			<ul class="education">
				<li>学历：本科</li>
				<li>学年：2015年</li>
				<li>毕业院校：公安大学</li>
				<li>出生年月：1997年9月</li>
			</ul>
		</div>`
});
//x-selfintro
require('../styles/x-selfintro.css')
xtag.register('x-selfintro', {
    content: `<div class="self-intro">
            <figure class="dream-picture">
                <img src="images/dream.jpg" alt="">
                <span style="font-size: 1.5rem;">平生逐梦，此心不悔</span>
            </figure>
            <div class="section-hd">
                <h2 class="section-tt">技能特长</h2></div>
            <div class="tech-box">
                <div class="tech-title">
                    <span class="title-text">前端开发</span>
                    <button class="title-btn">熟悉</button>
                </div>
                <div class="tech-details">HTML5, CSS3, ES6, JQUERY, REACT, SPA</div>
                <div class="item-progress-bar"><span class="bar-percent"></span></div>
            </div>
            <div class="tech-box">
                <div class="tech-title">
                    <span class="title-text">JS后端开发</span>
                    <button class="title-btn">了解</button>
                </div>
                <div class="tech-details">NODE.JS, EXPRESS, KOA, OOP, AOP</div>
                <div class="item-progress-bar"><span class="bar-percent"></span></div>
            </div>
            <div class="tech-box">
                <div class="tech-title">
                    <span class="title-text">前端工程化</span>
                    <button class="title-btn">熟悉</button>
                </div>
                <div class="tech-details">前端模块化，版本控制，打包工具，项目测试，前端安全</div>
                <div class="item-progress-bar"><span class="bar-percent"></span></div>
            </div>
        </div>`
})
require('../styles/x-html.css')
xtag.register('x-html', {
    content: `<header class="xtag-header">
            <h2 class="xtag-title">web component</h2>
            <hr style="margin: 10px">
            <span style="color: #808080">H5语义化，元素组件化</span>
        </header>
        <section class="html-picture-box">
            <img src="images/html.png" alt="">
        </section>
        <footer class="html-footer">
            <button class="html-button">相关文档</button>
        </footer>`
})
require('../styles/x-css.css')
xtag.register('x-css', {
    content: `<header class="xtag-header">
            <h2 class="xtag-title">CSS3</h2>
            <hr style="margin: 10px">
            <span style="color: #808080">CSS也可以做动画！！！</span>
        </header>
        <main class="animation-box">
            <div id="cube">
                <div><img src="images/jerry.jpg" /></div>
                <div><img src="images/jerry.jpg" /></div>
                <div><img src="images/jerry.jpg" /></div>
                <div><img src="images/jerry.jpg" /></div>
                <div><img src="images/jerry.jpg" /></div>
                <div><img src="images/jerry.jpg" /></div>
            </div>
        </main>`
})
xtag.register('x-es6', {
    content: `<header class="xtag-header">
            <h2 class="xtag-title">ES6</h2>
            <hr style="margin: 10px">
            <span style="color: #808080">将OOP思想代入JavaScript</span>
        </header>
        <section class="html-picture-box" style="zoom: 0.6">
            <img src="images/ES6.png" alt="">
        </section>
        <footer class="html-footer">
            <button class="html-button">相关文档</button>
        </footer>`
})