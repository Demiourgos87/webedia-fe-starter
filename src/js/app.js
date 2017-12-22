// ----- Main app file

// ----- Path to main SCSS file
var css = require('../scss/style.scss');

// ----- Require modules here
var $ = require('jquery');
var color = require('./test/test.js');

// ----- Call modules here
$(document).ready(function() {
    color();
});
