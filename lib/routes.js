
'use strict';

function getName(request, reply) {
    reply('Hola, ' + encodeURIComponent(request.params.name) + '!');
};

function get(request, reply) {
    reply('Hello there!');
};

module.exports = {
    getName: getName,
    get: get
};

