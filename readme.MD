# gifgifgifgifgifgif - a simple API to search the Giphy API

gifgifgifgifgifgif supports two basic endpoints, User registration and gif query

## Registration endpoint (POST)

* Accepts POST with query parameters: "user" and "password". 
* Passwords are salted, then stored into the Mongo DB.
* Basic Auth
* Returns Accepted (201 - Created) or (500 - Bad Request)

## Gif query endpoint (GET)

* Accepts GET with query parameters: "q", accepts a query string.
* Returns (200 - Ok) or (401 Unauthorized) depending if the user is authenticated
* Returns below JSON structure on 200

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
    "fixed_height":{  
      "url":"http://media3.giphy.com/media/rJY9OQDSDXBEA/200.gif",
      "width":"407",
      "height":"200",
      "size":"166027",
      "mp4":"http://media0.giphy.com/media/rJY9OQDSDXBEA/200.mp4",
      "mp4_size":"17883",
      "webp":"http://media0.giphy.com/media/rJY9OQDSDXBEA/200.webp",
      "webp_size":"152364"
    },
    "fixed_height_still":{  
      "url":"http://media0.giphy.com/media/rJY9OQDSDXBEA/200_s.gif",
      "width":"407",
      "height":"200"
    },
    "fixed_height_downsampled":{  
      "url":"http://media0.giphy.com/media/rJY9OQDSDXBEA/200_d.gif",
      "width":"407",
      "height":"200",
      "size":"262096",
      "webp":"http://media0.giphy.com/media/rJY9OQDSDXBEA/200_d.webp",
      "webp_size":"99608"
    },
    "fixed_width":{  
      "url":"http://media3.giphy.com/media/rJY9OQDSDXBEA/200w.gif",
      "width":"200",
      "height":"98",
      "size":"46127",
      "mp4":"http://media0.giphy.com/media/rJY9OQDSDXBEA/200w.mp4",
      "mp4_size":"19730",
      "webp":"http://media0.giphy.com/media/rJY9OQDSDXBEA/200w.webp",
      "webp_size":"53152"
    },
    "fixed_width_still":{  
      "url":"http://media2.giphy.com/media/rJY9OQDSDXBEA/200w_s.gif",
      "width":"200",
      "height":"98"
    },
    "fixed_width_downsampled":{  
      "url":"http://media2.giphy.com/media/rJY9OQDSDXBEA/200w_d.gif",
      "width":"200",
      "height":"98",
      "size":"106838",
      "webp":"http://media0.giphy.com/media/rJY9OQDSDXBEA/200w_d.webp",
      "webp_size":"35222"
    },
    "fixed_height_small":{  
      "url":"http://media0.giphy.com/media/rJY9OQDSDXBEA/100.gif",
      "width":"203",
      "height":"100",
      "size":"166027",
      "mp4":"http://media0.giphy.com/media/rJY9OQDSDXBEA/100.mp4",
      "mp4_size":"92137",
      "webp":"http://media0.giphy.com/media/rJY9OQDSDXBEA/100.webp",
      "webp_size":"53398"
    },
    "fixed_height_small_still":{  
      "url":"http://media0.giphy.com/media/rJY9OQDSDXBEA/100_s.gif",
      "width":"203",
      "height":"100"
    },
    "fixed_width_small":{  
      "url":"http://media0.giphy.com/media/rJY9OQDSDXBEA/100w.gif",
      "width":"100",
      "height":"49",
      "size":"46127",
      "mp4":"http://media0.giphy.com/media/rJY9OQDSDXBEA/100w.mp4",
      "mp4_size":"36232",
      "webp":"http://media0.giphy.com/media/rJY9OQDSDXBEA/100w.webp",
      "webp_size":"19394"
    },
    "fixed_width_small_still":{  
      "url":"http://media0.giphy.com/media/rJY9OQDSDXBEA/100w_s.gif",
      "width":"100",
      "height":"49"
    },
    "downsized":{  
      "url":"http://media1.giphy.com/media/rJY9OQDSDXBEA/giphy.gif",
      "width":"250",
      "height":"123",
      "size":"203811"
    },
    "downsized_still":{  
      "url":"http://media0.giphy.com/media/rJY9OQDSDXBEA/giphy_s.gif",
      "width":"250",
      "height":"123"
    },
    "downsized_large":{  
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
    },
    "original_still":{  
      "url":"http://media0.giphy.com/media/rJY9OQDSDXBEA/giphy_s.gif",
      "width":"250",
      "height":"123"
    }
  }
}
```

## Config

Config is stored in a gitignored file (config.js in the root): [config.js.example](config.js.example)

* Rename `config.js.example` to `config.js` and replace the content with your own configurations.
