var axios = require('axios');
var cookie = require('react-cookies');

var BASE_URL_PREFIX = 'https://esi.tech.ccp.is/latest';
var BASE_URL_PREDICATE = '?datasource=tranquility&language=en-us';
// var ACCESS_TOKEN = cookie.load('access_token');

module.exports = {
  getAccessToken: function() {
    if(cookie.load('access_token') !== undefined) {
      return cookie.load('access_token');
    } else {
      fetch('/refresh_token').then(() => {
        return cookie.load('access_token');
      }).catch((e) => {
        console.log(e);
      });
    }
  },
  getFleetMembers: function(fleetID) {
    var access_token = this.getAccessToken();
    var baseRequest = `/fleets/${fleetID}/members/${BASE_URL_PREDICATE}&token=${access_token}`;
    var requestUrl = `${BASE_URL_PREFIX}${baseRequest}`;
    return axios.get(requestUrl).then((data) => {
      console.log(data);
    });
  }
}
