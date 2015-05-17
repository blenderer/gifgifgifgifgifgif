# gifgifgifgifgifgif - a simple API to search the Giphy API

gifgifgifgifgifgif supports two basic endpoints, User registration and gif query

## Registration endpoint (POST) {server}/user

* Accepts POST with query parameters: "user" and "password".
* Stores user/password in mongodb
* Returns Accepted (201 - Created) or (500 - Bad Request) or (500 Username is Taken)

## Gif query endpoint (GET) {server}/

* Accepts GET with query parameters: "q", accepts a query string.
* Forces Basic Auth
* Returns (200 - Ok) or (401 Unauthorized) depending if the user is authenticated
* Returns 404 for no results and 500 for errors
* Returns below JSON structure like below on 200

```
{  
  "type":"gif",
  "id":"rJY9OQDSDXBEA",
  "url":"http://giphy.com/gifs/doctor-who-matt-smith-rJY9OQDSDXBEA",
  "bitly_gif_url":"http://gph.is/XLlcL9",
  "bitly_url":"http://gph.is/XLlcL9",
  "embed_url":"http://giphy.com/embed/rJY9OQDSDXBEA",
  "username":"",
  "source":"http://h-emingways.tumblr.com/post/15066057495/spending-new-years-with-may-girlfriend-i-love-her",
  "rating":"g",
  "caption":"",
  "content_url":"",
  "import_datetime":"2013-03-24 18:10:36",
  "trending_datetime":"1970-01-01 00:00:00",
  "images":{  
    "downsized":{  
      "url":"http://media1.giphy.com/media/rJY9OQDSDXBEA/giphy.gif",
      "width":"250",
      "height":"123",
      "size":"203811"
    },
    "original":{  
      "url":"http://media1.giphy.com/media/rJY9OQDSDXBEA/giphy.gif",
      "width":"250",
      "height":"123",
      "size":"203811",
      "frames":"9",
      "mp4":"http://media0.giphy.com/media/rJY9OQDSDXBEA/giphy.mp4",
      "mp4_size":"47897",
      "webp":"http://media0.giphy.com/media/rJY9OQDSDXBEA/giphy.webp",
      "webp_size":"70486"
    }
  }
}
```

## Config

Config is stored in a gitignored file (config.js in the root): [config.js.example](config.js.example)

* Rename `config.js.example` to `config.js` and replace the content with your own configurations.

