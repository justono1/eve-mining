var axios = require('axios');

var BASE_URL_PREFIX = 'https://esi.tech.ccp.is/latest';
var BASE_URL_PREDICATE = '?datasource=tranquility&language=en-us';
// var ACCESS_TOKEN = cookie.load('access_token');

module.exports = {
  getFleetMembers: function(fleetID) {
    return new Promise((resolve, reject) => {
      var data = [
        {
          character_id: 1313639888,
          join_time: "2017-07-15T01:39:18Z",
          role: "squad_member",
          role_name: "Squad Member",
          ship_type_id: 1944,
          solar_system_id: 30002609,
          squad_id: 3249211350054,
          takes_fleet_warp: true,
          wing_id: 2146111350054
        },
        {
          character_id: 1226244285,
          join_time: "2017-07-15T01:39:01Z",
          role: "fleet_commander",
          role_name: "Fleet Commander (Boss)",
          ship_type_id: 12753,
          solar_system_id: 30000142,
          squad_id: -1,
          takes_fleet_warp: true,
          wing_id: -1
        },
        {
          character_id: 2112166439,
          join_time: "2017-07-15T01:39:21Z",
          role: "squad_member",
          role_name: "Squad Member",
          ship_type_id: 11129,
          solar_system_id: 30000142,
          squad_id: 3249211350054,
          takes_fleet_warp: true,
          wing_id: 2146111350054
        }
      ];

      resolve(data);
    });
    // fetch('/get_token', {
    //   method: 'GET',
    //   credentials: 'same-origin'
    // })
    // .then(function(response) {
    //   return response.json()
    // })
    // .then(function(responseJson) {
    //   var access_token = responseJson.accessToken;
    //   var baseRequest = `/fleets/${fleetID}/members/${BASE_URL_PREDICATE}&token=${access_token}`;
    //   var requestUrl = `${BASE_URL_PREFIX}${baseRequest}`;
    //   return axios.get(requestUrl).then((data) => {
    //     return [
    //       {
    //         character_id: 1313639888,
    //         join_time: "2017-07-15T01:39:18Z",
    //         role: "squad_member",
    //         role_name: "Squad Member",
    //         ship_type_id: 1944,
    //         solar_system_id: 30002609,
    //         squad_id: 3249211350054,
    //         takes_fleet_warp: true,
    //         wing_id: 2146111350054
    //       },
    //       {
    //         character_id: 1226244285,
    //         join_time: "2017-07-15T01:39:01Z",
    //         role: "fleet_commander",
    //         role_name: "Fleet Commander (Boss)",
    //         ship_type_id: 12753,
    //         solar_system_id: 30000142,
    //         squad_id: -1,
    //         takes_fleet_warp: true,
    //         wing_id: -1
    //       },
    //       {
    //         character_id: 2112166439,
    //         join_time: "2017-07-15T01:39:21Z",
    //         role: "squad_member",
    //         role_name: "Squad Member",
    //         ship_type_id: 11129,
    //         solar_system_id: 30000142,
    //         squad_id: 3249211350054,
    //         takes_fleet_warp: true,
    //         wing_id: 2146111350054
    //       }
    //     ];
    //   });
    // });
  },
  getItemName: function(typeID) {
    var requestURL = `${BASE_URL_PREFIX}/universe/types/${typeID}/${BASE_URL_PREDICATE}`;

    return axios.get(requestURL).then((res) => {
      return(res);
    });
  },
  getCharacterName: function(typeID) {
    var requestURL = `${BASE_URL_PREFIX}/characters/${typeID}/${BASE_URL_PREDICATE}`;

    return axios.get(requestURL).then((res) => {
      return(res);
    });
  }
}
