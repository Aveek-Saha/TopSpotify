var SpotifyWebApi = require("spotify-web-api-node");

module.exports = async (req, res) => {
    var code = req.query.code;

    var redirectUri = "http://localhost:3000/api/token",
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
    console.log(data.body["refresh_token"]);
    spotifyApi.setAccessToken(data.body["access_token"]);
    spotifyApi.setRefreshToken(data.body["refresh_token"]);
    var topArtists = await (await spotifyApi.getMyTopArtists()).body.items
    console.log(topArtists);
    // spotifyApi.authorizationCodeGrant(code).then(
    //     function (data) {
    //         console.log("The token expires in " + data.body["expires_in"]);
    //         console.log("The access token is " + data.body["access_token"]);
    //         console.log("The refresh token is " + data.body["refresh_token"]);

    //         // Set the access token on the API object to use it in later calls
    //         spotifyApi.setAccessToken(data.body["access_token"]);
    //         spotifyApi.setRefreshToken(data.body["refresh_token"]);
    //         spotifyApi.getMyTopArtists().then(
    //             function (data) {
    //                 let topArtists = data.body.items;
    //                 console.log(topArtists);
    //                 res.status(200).send(topArtists);

    //             },
    //             function (err) {
    //                 console.log("Something went wrong!", err);
    //             }
    //         );
    //     },
    //     function (err) {
    //         console.log("Something went wrong!", err);
    //     }
    // );

    res.status(200).send(req.query);
};
