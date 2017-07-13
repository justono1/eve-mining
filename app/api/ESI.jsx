var axios = require('axios');
var {Cookies} = require('react-cookie');
var {SingleSignOn} = require('eve-singlesignon');

var BASE_URL_PREFIX = 'https://esi.tech.ccp.is/latest';
var BASE_URL_PREDICATE = '?datasource=tranquility&language=en-us';

const CLIENT_ID = "fadf0e3d29e44d3db29a9865df475afc";
const SECRET_KEY = "gZzLKA0BS45mvrrsHRtS9qIIeu8Rc4jovlWs9wkX";
const CALLBACK_URL = "http://eve-mining-op.herokuapp.com/auth_callback";

const sso = new SingleSignOn(CLIENT_ID, SECRET_KEY, CALLBACK_URL);

console.log(Cookies.get('request_token'));

module.exports = {
  getFleetMembers: function(fleetID) {
    console.log(Cookies.get('request_token'));



  }
}
