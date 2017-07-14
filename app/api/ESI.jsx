var axios = require('axios');
var cookie = require('react-cookies');

var BASE_URL_PREFIX = 'https://esi.tech.ccp.is/latest';
var BASE_URL_PREDICATE = '?datasource=tranquility&language=en-us';
// var ACCESS_TOKEN = cookie.load('access_token');

module.exports = {
  getFleetMembers: function(fleetID) {
    fetch('/refresh_token', {
      method: 'GET',
      credentials: 'same-origin'
    })
    .then(function(response) {
      return response.json()
    })
    .then(function(responseJson) {
      console.log(responseJson);
    });
    // var baseRequest = `/fleets/${fleetID}/members/${BASE_URL_PREDICATE}&token=${access_token}`;
    // var requestUrl = `${BASE_URL_PREFIX}${baseRequest}`;
    //
    // if(cookie.load('access_token') !== undefined) {
    //   access_token = cookie.load('access_token');
    // }
    //
    // return axios.get(requestUrl).then((data) => {
    //   console.log(data);
    // });
  }
}
