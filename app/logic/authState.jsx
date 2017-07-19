import cookie from 'react-cookies';

var auth_token = 'wp-settings-time-1';

module.exports = {
  hasRefreshToken: function() {
    var refresh_token = cookie.load(auth_token);
    if(refresh_token === undefined) {
      return false;
    } else {
      return true;
    }
  },
  removeRefreshToken: function() {
    cookie.remove(auth_token);
  }
}
