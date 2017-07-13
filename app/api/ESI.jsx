var axios = require('axios');
// var cookie = require('react-cookies');

// var access_token = cookie.load('access_token');

module.exports = {
  getFleetMembers: function(fleetID) {
    var baseRequest = `/fleets/${fleetID}/members/${BASE_URL_PREDICATE}&token=${access_token}`;
    var requestUrl = `${BASE_URL_PREFIX}${baseRequest}`;
    return axios.get(requestUrl).then((data) => {
      console.log(data);
    });
  }
}
