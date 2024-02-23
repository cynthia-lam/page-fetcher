const fs = require('fs');
const request = require('request');
const URL = process.argv.slice(2)[0];
const PATH = process.argv.slice(2)[1];

request(URL, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  
  // save it to a file at PATH
  fs.writeFile(PATH, body, err => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${PATH}`);
    }
  });
});

