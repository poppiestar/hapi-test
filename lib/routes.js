
var marko = require('marko');

'use strict';

var bodyProvider = function (args, callback) {
    setTimeout(function () {
        callback(null, {'content': 'This is my async content'});
    }, 2000);
};

function getName(request, reply) {
    reply('Hola, ' + encodeURIComponent(request.params.name) + '!');
};

function get(request, reply) {
    var viewModel = {
        bodyProvider: bodyProvider
    };

    reply.view('index', viewModel);
};

module.exports = {
    getName: getName,
    get: get
};

