var axios = require('axios');

var BASE_URL_PREFIX = 'https://esi.tech.ccp.is/latest';
var BASE_URL_PREDICATE = '?datasource=tranquility&language=en-us';
var ACCESS_TOKEN = "WjYxizca6V7Ej52G1B3G0uc9S5pQtC9ntl0nB7DSzWCMkNapZMBrQ_nhxFyu5ZvtvwtLoAa2rz1_XZgvDbPyGw2";

module.exports = {
  getFleetMembers: function(fleetID) {
    var baseRequest = `/fleets/${fleetID}/members/${BASE_URL_PREDICATE}&token=${ACCESS_TOKEN}`;
    var requestUrl = `${BASE_URL_PREFIX}${baseRequest}`;
    return axios.get(requestUrl).then((data) => {
      console.log(data);
    });
  }
}
