const randomPort = require('random-port');

module.exports = function () {
    return new Promise(resolve => {
        randomPort(resolve);
    });
}
