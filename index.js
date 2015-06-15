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
   * Shouldn't be needed except for testing and dev
   */
  setConfig: function(config) {
    this.config = config;
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
   * @param  {String} apiToken This is the token you can find on your account
   *   page
   */
  initialize: function(apiToken) {
    this.config.auth.params.user_token = apiToken;
    this.pusherClient = new Pusher(APP_ID, this.config);
  },

  /**
   * Start getting data
   * @param  {Function} callback Function(data). Will be called when there is
   *   new data to read.
   */
  start: function(callback) {
    var channel = this.pusherClient.subscribe('private-depth-sandbox');
    channel.bind('data', function(data) {
      callback(data);
    });
  }
};


module.exports = Optimalprime;
