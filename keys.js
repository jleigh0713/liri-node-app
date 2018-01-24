console.log('keys.js loaded');

exports.twitter = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};

/*exports.spotify = {
  id: process.env.64462369fa4d474c96da447a6daf588b,
  secret: process.env.5a6f7ae0bedf414c8e28b62cf38fd952
};*/
