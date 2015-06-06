var Pusher = require('pusher-client');
var url = require('url');

var exchanges = require('./exchanges');
var currencies = require('./currencies');


var SERVER_URL = 'http://backend.optimalprime.io';
var APP_ID = '875ef910ce4268500a3b';


var Optimalprime = {

  config: {
    authEndpoint:url.resolve(SERVER_URL, '/pusher/auth'),
    auth: {
      params: {}
    }
  },

  /**
   * Currency constants. Please use these to match with incoming data.
   */
  currencies: currencies,

  /**
   * Exchanges constants. Please use these to match with incoming data.
   * @type {[type]}
   */
  exchanges: exchanges,

  /**
   * Initialize the optimalprime SDK. Pass the username and password that you've
   * registered with.
   * @param  {String} username This would be your email
   * @param  {[type]} password Your account password
   */
  initialize: function(username, password) {
    this.config.auth.params.username = username;
    this.config.auth.params.password = username;

    this.pusherClient = new Pusher(APP_ID, this.config);
  },

  start: function(callback) {
    var channel = pusher.subscribe('private-depth');
    channel.bind('data', function(data) {
      callback(data);
    });
  }
};


module.exports = Optimalprime;
