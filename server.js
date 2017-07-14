var express = require('express');
var cookieParser = require('cookie-parser');
var {SingleSignOn} = require('eve-singlesignon');

//https://esi.tech.ccp.is/latest/characters/893818612/skillqueue/?datasource=tranquility&token=fUZDWxGo3XWa3sVafYJXEikzuSPlI02byLAYRPxSITe0yZuvfu2XnwrKYfju-a5l_KHKieVhB611jqbHY6niZQ2'


//Permission Needed
var scopeList = "characterLocationRead corporationAssetsRead corporationMembersRead corporationStructuresRead fleetRead publicData esi-fleets.read_fleet.v1 esi-location.read_location.v1 esi-location.read_ship_type.v1"

//App Info
const CLIENT_ID = "fadf0e3d29e44d3db29a9865df475afc";
const SECRET_KEY = "gZzLKA0BS45mvrrsHRtS9qIIeu8Rc4jovlWs9wkX";
const CALLBACK_URL = "http://eve-mining-op.herokuapp.com/auth_callback";
const SCOPES = scopeList;

const sso = new SingleSignOn(CLIENT_ID, SECRET_KEY, CALLBACK_URL);

// Create Our App
var app = express();
const PORT = process.env.PORT || 3000;

app.use(cookieParser());

app.get('/login', function(req, res) {
  return res.redirect(sso.getRedirectUrl(null, SCOPES));
});

app.get('/refresh_token', function(req, res) {
  if(req.cookies.refresh_token !== undefined) {
    sso.getAccessToken(req.cookies.refresh_token).then(result => {
      res.cookie('access_token', result.access_token, {
        expires: new Date(Date.now() + (1000*60*19))
      });
    });
  }
});

app.get('/auth_callback', function(req, res) {
  var access_token_cookie = req.cookies.access_token;
  if(access_token_cookie === undefined) {
    sso.getAccessToken(req.query.code).then(result => {

      res.cookie('access_token', result.access_token, {
        expires: new Date(Date.now() + (1000*60*19))
      });

      if(req.cookies.request_token === undefined) {
        res.cookie('refresh_token', result.refresh_token, {
          expires: new Date(Date.now() + (30*24*60*60*1000))
        });
      }


      res.redirect('/');
        // The result contains the access token and expiry time
        // console.log('Access Token:', result.access_token);
        // console.log('Refresh Token:', result.refresh_token);
        // console.log('Expires in:', result.expires_in);
        // Store the access token so you can use it later

        // Access basic character info
        // return sso.verifyAccessToken(result.access_token);
    }).catch((err) => {
      console.log('There was an error');
    });
  }
});

// .then(result => {
//   var charInfo = [result.CharacterID, result.CharacterName];
//   localStorage.setItem('charInfo', JSON.stringify(charInfo));
//     // We now have some basic info...
//     console.log('Character ID:', result.CharacterID);
//     console.log('Character Name:', result.CharacterName);
// }, err => {
//     // An error occurred
// });

app.use(function(req, res, next) {
  if(req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static('public'));

app.listen(PORT, function() {
  console.log('express server is up on port '+ PORT);
});
