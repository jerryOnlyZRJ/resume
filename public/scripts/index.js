require('./pages.js')
require('../styles/style.css')
require('./background.js')
const screenWidth = document.body.offsetWidth;
if (screenWidth >= 1000) {
    $("#flipbook").turn({
        width: screenWidth >= 1200 ? 960 : 0.8 * screenWidth,
        height: screenWidth >= 1200 ? 720 : 0.6 * screenWidth,
        autoCenter: true
    });
}