var $ = require('jquery');

// ----- Function
// module.exports = function() {
//     $('body').css({'background': '#ec6969'});
// };


// ----- Object
module.exports = {
    bodyDark: function() {
        $('body').css({'background': '#2f2f2f'});
    },
    bodyLight: function() {
        $('body').css({'background': '#d2f3ff'});
    }
};
