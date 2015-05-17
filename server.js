// get our config
var config = require('./config.js');

// request so we can access giphy
var request = require('request');

// query string helps us serialize parameters
var querystring = require('querystring');

// scaffold the express app
var express = require('express');
var app = express();

var users = [
    {
        username: 'blenderer',
        password: 'password'
    },
    {
        username: 'admin',
        password: 'admin'
    }
];



var passport = require('passport')
  , DigestStrategy = require('passport-http').DigestStrategy;

passport.use(new DigestStrategy({ qop: 'auth'},
  function(username, done) {
    return done('null', users[0], users[0].password);
  }
));

app.use(passport.initialize());



// our gif search endpoint
app.get('/',
    //passport.authenticate('digest', { session: false }),
    function(req, res) {

    // build our query parameters
    queryParams = {
        q: req.query.q,
        api_key: config.giphyKey
    };

    // serialize our query parameters
    giphyQueryString = querystring.stringify(queryParams);

    request('http://api.giphy.com/v1/gifs/search?' + giphyQueryString, function (error, giphyResponse, body) {
        
        // if everyone is feeling Ok.
        if (!error && giphyResponse.statusCode == 200) {
            var result = JSON.parse(body);

            if (result.data) {

                // check if we have any results
                if (result.data.length > 0) {

                    // we only need to get the first result
                    res.send(result.data[0]);
                }
                else {
                    res.status(404).send({msg: 'No results'});
                }
            }
            else {
                res.status(500).send({msg: 'Uh-oh! Something went wrong!'});
            }
        }
        else {
            res.status(500).send({msg: 'Uh-oh! Something went wrong!'});
        }
    })
});

// our user creation endpoint
app.post('/user', function(req, res) {
    res.send(req.query.user + " " + req.query.password);
});

app.listen(config.port);