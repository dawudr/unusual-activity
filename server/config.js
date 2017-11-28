var path = require('path');
var dotenv = require('dotenv');
var cfg = {};

// did not specific whether the server is production or test ot development
if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test' && process.env.NODE_ENV !== 'development') {
  dotenv.config({
    path: path.join(__dirname, './../.env')
  });
} else {
  dotenv.config({
    path: path.join(__dirname, './../.env.test'),
    silent: true
  });
}

// console.log('path: ' + path.join(__dirname, './../.env'));

// HTTP Port to run our web application
cfg.port = process.env.PORT || 8080;

// A random string that will help generate secure one-time passwords and
// HTTP sessions
cfg.secret = process.env.APP_SECRET || 'keyboard cat';

cfg.purchasedDB = process.env.purchasedDB;
cfg.favoriteDB = process.env.favoriteDB;

var requiredConfig = [cfg.accountSid, cfg.authToken, cfg.sendingNumber];
var isConfigured = requiredConfig.every(function (configValue) {
  return configValue || false;
});

// Export configuration object
module.exports = cfg;
