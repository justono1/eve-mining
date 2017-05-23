var axios = require('axios');

var BASE_URL = 'http://api.eve-central.com/api/marketstat/json'

module.exports = {
  getPrice: function(typeID, orderType = 'sell', systemID = 30000142) {
    var requestUrl = `${BASE_URL}?typeid=${typeID}&usesystem=${systemID}`;

    return axios.get(requestUrl).then(function(res) {
      switch(orderType) {
        case 'sell':
          return res.data[0].sell;
        break;
        case 'buy':
          return res.data[0].buy;
        break;
        default:
          return res.data[0];
      }
    }, function(error) {
      throw new Error('Unable to retrieve market data');
    });
  }
}
