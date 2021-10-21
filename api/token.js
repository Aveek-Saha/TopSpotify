var SpotifyWebApi = require("spotify-web-api-node");

module.exports = async (req, res) => {
    var code = req.query.code;

    var redirectUri = "http://localhost:3000",
        clientId = process.env.CLIENT_ID,
        clientSecret = process.env.CLIENT_SECRET;

    // Setting credentials can be done in the wrapper's constructor, or using the API object's setters.
    var spotifyApi = new SpotifyWebApi({
        redirectUri: redirectUri,
        clientId: clientId,
        clientSecret: clientSecret,
    });

    // Retrieve an access token and a refresh token
    var data = await spotifyApi.authorizationCodeGrant(code);
    spotifyApi.setAccessToken(data.body["access_token"]);
    spotifyApi.setRefreshToken(data.body["refresh_token"]);
    var topArtists = await (await spotifyApi.getMyTopArtists()).body.items

    console.log(topArtists);

    res.status(200).send(topArtists);
};
