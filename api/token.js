var SpotifyWebApi = require('spotify-web-api-node');

module.exports = (req, res) => {
  console.log(req.query.code);
  res.status(200).send(req.query);
};