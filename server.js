// get our config
var config = require('./config.js');

var crypto = require('crypto');
var saltLengthBytes = 64;
var hashIterations = 10000;
var keyLengthBytes = 64;


// request so we can access giphy
var request = require('request');

// query string helps us serialize parameters
var querystring = require('querystring');

// scaffold the express app
var express = require('express');
var app = express();


var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
 


var passport = require('passport')
  , DigestStrategy = require('passport-http').DigestStrategy;

passport.use(new DigestStrategy({ qop: 'auth'},
  function(username, done) {

    MongoClient.connect('mongodb://localhost:27017/test', function(err, db) {
      collection = db.collection('users');

      collection.findOne({ 'username': username }, function(err, item) {

        if (item) {
            done(null, item, item.password);
        }
        else {
            done('Username and password does not match');
        }
        db.close();
      })
      
    });
  }
));

app.use(passport.initialize());



// our gif search endpoint
app.get('/',
    passport.authenticate('digest', { session: false }),
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
    
    if (!req.query.user || !req.query.password) {
        res.status(500).send({msg: 'Username or password is missing.'});
        return false;
    }

    MongoClient.connect('mongodb://localhost:27017/test', function(err, db) {
      collection = db.collection('users');

      collection.insert({
        username: req.query.user,
        password: req.query.password
      }, null, function(err, records) {
        if (!err) {
            res.status(201).send({msg: 'User created.'})
        }
        else if (err.code == 11000) {
            res.status(500).send({msg: "Username is taken"});
        }
      });
      
    });
});

app.listen(config.port);