require('./pages.js')
require('../styles/style.css')
require('./background.js')
const screenWidth = document.body.offsetWidth

if ($('#flipbook')) {
    $('#flipbook').turn({
        width: 960,
        height: 720,
        autoCenter: true
    })
    $(".loading-page").removeClass("displayed")
}