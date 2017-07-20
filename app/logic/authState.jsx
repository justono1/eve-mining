import cookie from 'react-cookies';

var auth_token = 'refresh_token';

module.exports = {
  hasRefreshToken: function() {
    return true;
    // var refresh_token = cookie.load(auth_token);
    // if(refresh_token === undefined) {
    //   return false;
    // } else {
    //   return true;
    // }
  },
  removeRefreshToken: function() {
    cookie.remove(auth_token);
    cookie.remove('access_token');
  }
}
