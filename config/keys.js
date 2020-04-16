if (process.env.NODE === 'production') {
    // production mode returns production keys
    module.exports = require('./production');
} else {
    // development mode return dev keys
    module.exports = require('./dev');
}