// ----- Main app file

var $ = require('jquery');
window.app = {};

// ----- Path to main SCSS file
var css = require('./scss/style.scss');

// ----- Require modules here
var testLog = require('./js/test/test.js');

// ----- Call modules here
$(document).ready(function() {
    testLog();
});
