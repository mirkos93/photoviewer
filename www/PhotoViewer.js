var exec = require('cordova/exec');

exports.show = function(url, title, options, message) {
    if (title == undefined) {
        title = '';
    }

    if (message == undefined) {
       message = '';
    }

    if (typeof options == "undefined") {
        options = {};
    }

    if (options.share === undefined) {
        options.share = false;
    }

    if (options.closeButton === undefined) {
        options.closeButton = true;
    }

    if (options.copyToReference === undefined) {
        options.copyToReference = false;
    }

    var args = [url, title, options.share, options.closeButton, options.copyToReference, message];

    exec(function() {}, function() {}, "PhotoViewer", "show", args);
};
