var express = require('express');
var {SingleSignOn} = require('eve-singlesignon');

//https://esi.tech.ccp.is/latest/characters/893818612/skillqueue/?datasource=tranquility&token=fUZDWxGo3XWa3sVafYJXEikzuSPlI02byLAYRPxSITe0yZuvfu2XnwrKYfju-a5l_KHKieVhB611jqbHY6niZQ2'


//Permission Needed
var scopeList = "characterLocationRead corporationAssetsRead corporationMembersRead corporationStructuresRead fleetRead publicData esi-fleets.read_fleet.v1 esi-location.read_location.v1 esi-location.read_ship_type.v1"

//App Info
const CLIENT_ID = "fadf0e3d29e44d3db29a9865df475afc";
const SECRET_KEY = "gZzLKA0BS45mvrrsHRtS9qIIeu8Rc4jovlWs9wkX";
const CALLBACK_URL = "https://eve-mining-op.herokuapp.com/auth_callback";
const SCOPES = scopeList;

const sso = new SingleSignOn(CLIENT_ID, SECRET_KEY, CALLBACK_URL);

// Create Our App
var app = express();
const PORT = process.env.PORT || 3000;

app.get('/login', function(req, res) {
  return res.redirect(sso.getRedirectUrl(null, SCOPES));
});

app.get('/auth_callback', function(req, res) {
    // Get an access token for this authorization code
    sso.getAccessToken(req.query.code).then(result => {
        localStorage.setItem('access', JSON.stringify(result));
        // The result contains the access token and expiry time
        console.log('Access Token:', result.access_token);
        console.log('Refresh Token:', result.refresh_token);
        console.log('Expires in:', result.expires_in);
        // Store the access token so you can use it later

        // Access basic character info
        return sso.verifyAccessToken(result.access_token);
    })
    .then(result => {
        // We now have some basic info...
        console.log('Character ID:', result.CharacterID);
        console.log('Character Name:', result.CharacterName);
    }, err => {
        // An error occurred
    });

    return res.redirect('/');
});

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
