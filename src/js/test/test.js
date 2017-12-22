// ----- Typical module

var $ = require('jquery');

module.exports = function() {
    $('body').css({'background': '#ededed'});
    console.log('App ready');
};
