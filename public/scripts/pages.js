import { DatePicker } from 'antd';
require('./turn.min.js')

//x-project-info
require('../styles/x-project-info.css')
xtag.register('project-video', {
    content: `<div class="project-section-hd">
            <h2 class="project-section-tt">社区安全防范视频监控系统</h2>
        </div>
        <div class="job-box">
            <div class="blue-point"></div>
            <section class="job-info">
                <header>
                    <h2>项目简介</h2>
                </header>
                <p class="job-detail">本项目基于视频图像识别技术，对前端采集的视频进行逐帧处理，采集人像并分析人员出入信息，对比公安系统信息资源库，提供可疑人员（小偷、扒手等）预判。</p>
                <p class="job-detail project-link">项目链接：<a target="_Blank" href="https://github.com/jerryOnlyZRJ/video-system">社区安全防范视频监控系统Video-system</a></p>
            </section>
        </div>
        <div class="job-box">
            <div class="blue-point"></div>
            <section class="job-info">
                <header>
                    <h2>项目分工</h2>
                </header>
                <p class="job-detail">本人为项目第二负责人，负责项目前端架构、页面实现、PHP中间层封装、服务器部署、项目上线，参与数据库设计、可疑人员研判算法设计；所负责工作覆盖技术栈：HTML5 Web Component、fetch API、Flex布局、ES6、git版本控制、前端模块化、前后端分离、接口设计原则、node.js、koa2基本API，PHP基本操作、MySQL基本操作、webpack3、前端测试（单元测试、自动化测试）、pm2负载均衡、nginx反向代理基本配置、xampp基本使用、Linux基本操作。</p>
            </section>
        </div>`
})
xtag.register('project-recorder', {
    content: `<div class="project-section-hd">
            <h2 class="project-section-tt">语音识别智能笔录手机软件</h2>
        </div>
        <div class="job-box">
            <div class="blue-point"></div>
            <section class="job-info">
                <header>
                    <h2>项目简介</h2>
                </header>
                <p class="job-detail">基于科大讯飞提供的DFCNN语音识别框架的人工智能笔录软件，借助MUI Hybrid框架，能够实现对询/讯问过程所采集语音的智能识别，最终转化成指定格式的Word文档以便打印。软件已取得软件著作权。</p>
                <p class="job-detail project-link">项目链接：<a target="_Blank" href="https://mp.weixin.qq.com/s?__biz=MzUyNTI4MzgyOA==&mid=2247483772&idx=1&sn=a8cc9c651810e068c95f265a20a08e61&chksm=fa2139e7cd56b0f1d2cdbaa368385aa7b7d47fcfe5c3e2ffce0ac6d872b8ffa396a68918136a&mpshare=1&scene=1&srcid=0314kQW3H1cKsWwSvtiThEEm&pass_ticket=DvfZK18RncEle%2FRY5cBs4cyh6UslQQP8yyIcWq7q45crCOVnwn4ktPoylyW0jLox#rd">人工智能大时代的产物——语音识别笔录软件</a></p>
            </section>
        </div>
        <div class="job-box">
            <div class="blue-point"></div>
            <section class="job-info">
                <header>
                    <h2>项目分工</h2>
                </header>
                <p class="job-detail">本人为项目负责人，负责项目需求分析、算法设计、前后端架构、APP打包发布；所负责工作覆盖技术栈：HTML5语义化、Flex布局、响应式设计、AJAX、ES6、jQuery。</p>
            </section>
        </div>`
})

// x-selfinfo
require('../styles/x-selfinfo.css')
xtag.register('x-selfinfo', {
    content: `<div class="main">
            <div class="user-avatar">
                <img src="static/images/avatar.webp" alt="">
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
                    <li class="contact-item iconfont icon-phone">13717849536</li>
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
})
// x-selfintro
require('../styles/x-selfintro.css')
xtag.register('x-selfintro', {
    content: `<div class="self-intro">
            <figure class="dream-picture">
                <img src="static/images/dream.webp" alt="">
                <span style="font-size: 1.5rem;">平生逐梦，此心不悔</span>
            </figure>
            <div class="section-hd">
                <h2 class="section-tt">技能特长</h2></div>
            <div class="tech-box">
                <div class="tech-title">
                    <span class="title-text">前端开发</span>
                    <button class="title-btn">熟悉</button>
                </div>
                <div class="tech-details">HTML5, CSS3, ES6, jQuery, React, SPA</div>
                <div class="item-progress-bar"><span class="bar-percent"></span></div>
            </div>
            <div class="tech-box">
                <div class="tech-title">
                    <span class="title-text">JS后端开发</span>
                    <button class="title-btn">了解</button>
                </div>
                <div class="tech-details">Node.js, KOA, Linux, Express, PHP, MYSQL</div>
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

//x-html
require('../styles/x-html.css')
xtag.register('x-html', {
    content: `<header class="xtag-header">
            <h2 class="xtag-title">web component</h2>
            <hr style="margin: 10px">
            <span style="color: #808080">H5语义化，元素组件化</span>
        </header>
        <section class="html-picture-box">
            <img src="static/images/html.webp" alt="">
        </section>
        `
})

//x-css
require('../styles/x-css.css')
xtag.register('x-css', {
    content: `<header class="xtag-header">
            <h2 class="xtag-title">CSS3</h2>
            <hr style="margin: 10px">
            <span style="color: #808080">CSS也可以做动画！！！</span>
        </header>
        <main class="animation-box">
            <div id="cube">
                <div><img src="static/images/jerry.webp" /></div>
                <div><img src="static/images/jerry.webp" /></div>
                <div><img src="static/images/jerry.webp" /></div>
                <div><img src="static/images/jerry.webp" /></div>
                <div><img src="static/images/jerry.webp" /></div>
                <div><img src="static/images/jerry.webp" /></div>
            </div>
        </main>`
})

//x-es6
xtag.register('x-es6', {
    content: `<header class="xtag-header">
            <h2 class="xtag-title">ES6</h2>
            <hr style="margin: 10px">
            <span style="color: #808080">将OOP思想代入JavaScript</span>
        </header>
        <section class="html-picture-box" style="zoom: 0.6">
            <img src="static/images/ES6.webp" alt="">
        </section>
        <footer class="html-footer">
            <button class="html-button">相关文档</button>
        </footer>`
})

//douban-pocket
import '../../src/douban/index.jsx'

//chat robot
require('../styles/x-chat.css')
xtag.register('x-chat', {
    content: ` <header class="chat-header">
            <h1 class="chat-title">Jerry</h1>
        </header>
        <div class="chat-body">
            <div class="chat-list">
                <div class="chat-box-time">
                    <span class="chat-time">刚刚</span>
                </div>
                <div class="chat-box chat-box-left">
                    <img class="chat-avatar" src="static/images/jerry.webp" />
                    <div class="chat-content">
                        <div class="chat-content-inner">Hello</div>
                        <div class="chat-content-arrow"></div>
                    </div>
                    <div class="clear-float"></div>
                </div>
            </div>
        </div>
        <footer class="chat-footer">
            <div class="footer-left">
                <i class="iconfont icon-yuyin"></i>
            </div>
            <div class="footer-center">
                <input id="msg-input" class="input-text"></input>
            </div>
            <div class="footer-right">
                <i id="emotions" class="iconfont icon-biaoqing"></i>
                <i id="more" class="iconfont icon-weibiaoti-_fuzhi-"></i>
                <button id="send" type="button" class="chat-send-btn">发送</button>
            </div>
        </footer>`,
    lifecycle: {
        inserted: () => {
            const $sendButton = $('#send')
            const $emotions = $('#emotions')
            const $more = $('#more')
            const $msgInput = $('#msg-input')
            const apiUrl = 'http://www.tuling123.com/openapi/api'
            $msgInput.unbind('input').on('input', () => {
                if ($msgInput.val()) {
                    sendBtnDisplay()
                } else {
                    sendBtnDisappear()
                }
            })

            $msgInput.unbind('keypress').on('keypress', (e) => {
                const currkey = e.keyCode || e.which || e.charCode;
                if (currkey === 13) {
                    sendMessage()
                }
            })

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

            //发送按钮出现
            function sendBtnDisplay() {
                $sendButton.css('display', 'block')
                $emotions.css('display', 'none')
                $more.css('display', 'none')
            }

            //发送按钮消失
            function sendBtnDisappear() {
                $sendButton.css('display', 'none')
                $emotions.css('display', '')
                $more.css('display', '')
            }

            //拼接HTML
            function appendItem(html) {
                let newDom = document.createElement('div');
                newDom.innerHTML = html;
                const msgList = document.querySelector('.chat-list');
                msgList.appendChild(newDom);
                msgList.scrollTop = msgList.scrollHeight - msgList.offsetHeight;
            }

            //渲染发送信息
            function renderSend(value) {
                let willSendMsg = `<div class="chat-box chat-box-right">
                        <img class="chat-avatar" src="static/images/avatar.webp"/>
                        <div class="chat-content">
                        <div class="chat-content-inner">
                        ${value}</div>
                        <div class="chat-content-arrow"></div>
                        </div>
                        <div class="clear-float"></div>
                        </div> `;
                appendItem(willSendMsg)
            }

            //渲染回复信息
            function renderRes(value) {
                let responseMsg = `<div class="chat-box chat-box-left">
                                  <img class="chat-avatar" src="static/images/jerry.webp" />
                                  <div class="chat-content">
                                <div class="chat-content-inner">${value}</div>
                                <div class="chat-content-arrow"></div>
                                    </div>
                                    <div class="clear-float"></div>
                                </div>`;
                appendItem(responseMsg)
            }

            function sendMessage() {
                const $msgValue = htmlEncode($('#msg-input').val())
                renderSend($msgValue)
                $msgInput.val('');
                sendBtnDisappear()
                $.ajax(apiUrl, {
                    data: {
                        'key': "4764e092e4664c42bf33b15e0857a88a",
                        'info': $msgValue,
                        'userid': "jerry"
                    },
                    success: (data) => {
                        renderRes(htmlEncode(data.text))
                    }
                })
            }

            $('.footer-right').unbind('click').on('click', '#send', () => {
                sendMessage()
            })
        }
    }
})

//x-jquery
xtag.register('x-jquery', {
    content: `<header class="xtag-header">
            <h2 class="xtag-title">jQuery</h2>
            <hr style="margin: 10px">
            <span style="color: #808080">JavaScript Library</span>
        </header>
        <section class="text-describe">
            <h2>框架只是工具，思想才是王道</h2>
            <hr style="margin: 10px">
            <p>左侧的demo就是一款使用jQuery作为工具库开发的简易版聊天机器人，试着和他说些话吧，他很有趣的哦！</p>
            <p>PS:这里开发的时候有点小坑，用jQuery.on绑定click事件之后会多次触发，不明觉厉的我去源代码
            里面debugger，发现事件被绑定了多次绑定，具体成因尚在研究，不过我通过了unbind()这么一个方法暂时性解决了这个问题。</p>
            <p><-  <-  <-</p>
        </section>
        `
})

//x-react
xtag.register('x-react', {
    content: `<header class="xtag-header">
            <h2 class="xtag-title">React</h2>
            <hr style="margin: 10px">
            <span style="color: #808080">JavaScript Framework</span>
        </header>
        <section class="text-describe">
            <h2>Web组件化思想的实战运用</h2>
            <hr style="margin: 10px">
            <p>作为三大框架之一的React，通过props进行组件间数据传递是其一大亮点，试试这样一款使用React
            开发的口袋豆瓣，尝试搜索些内容或者下拉刷新，你可以体验到这款框架的奇妙之处！！！(*^__^*) 嘻嘻</p>
            <p><-  <-  <-</p>
        </section> `
})

//x-end
xtag.register('x-end', {
    content: `<header class="xtag-header">
            <h2 class="xtag-title">END</h2>
            <hr style="margin: 10px">
            <span style="color: #808080">This is an end!</span>
        </header>
        <section class="text-describe">
            <h2>这就结束了吗？前端开发可不只这些</h2>
            <hr style="margin: 10px">
            <p>因为本次简历只对传统前端工作进行了展示，对于node还有其他大前端的进阶知识，欢迎访问我的github：
            <a href="https://github.com/jerryOnlyZRJ">https://github.com/jerryOnlyZRJ</a> 了解更多！</p>
        </section> `
})