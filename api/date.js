var SpotifyWebApi = require('spotify-web-api-node');

module.exports = (req, res) => {
  var scopes = ['user-top-read'],
  redirectUri = 'http://localhost:3000/api/token',
  clientId = process.env.CLIENT_ID;

  // Setting credentials can be done in the wrapper's constructor, or using the API object's setters.
  var spotifyApi = new SpotifyWebApi({
      redirectUri: redirectUri,
      clientId: clientId
  });

  // Create the authorization URL
  var authorizeURL = spotifyApi.createAuthorizeURL(scopes);

  console.log(process.env.CLIENT_ID);
  res.status(200).send(authorizeURL);
};
