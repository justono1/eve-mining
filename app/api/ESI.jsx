var axios = require('axios');
var cookie = require('react-cookies');

var BASE_URL_PREFIX = 'https://esi.tech.ccp.is/latest';
var BASE_URL_PREDICATE = '?datasource=tranquility&language=en-us';
var ACCESS_TOKEN = cookie.load('access_token');

module.exports = {
  getFleetMembers: function(fleetID) {
    var baseRequest = `/fleets/${fleetID}/members/${BASE_URL_PREDICATE}&token=${ACCESS_TOKEN}`;
    var requestUrl = `${BASE_URL_PREFIX}${baseRequest}`;
    return axios.get(requestUrl).then((data) => {
      console.log(data);
    });
  }
}
