'use strict';

/* eslint-disable no-unused-vars */

const functions = require('@google-cloud/functions-framework');
const escapeHtml = require('escape-html');


// Register an HTTP function with the Functions Framework that will be executed
// when you make an HTTP request to the deployed function's endpoint.
functions.http('helloGET', (req, res) => {
  res.send('Hello World!');
});

/**
 * Responds to an HTTP request using data from the request body parsed according
 * to the "content-type" header.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
functions.http('getArtwork', (req, res) => {
  console.log(req.query)
  var headers = {
    Authorization: `Bearer ${req.query.token}`
  }
  var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
  };

  var artworkId = random_artwork_id();
  console.log(artworkId)
  fetch(`https://apihackaton.zacheta.art.pl/api/v1/multimedia?fields=ThumbnailUrl&start=${artworkId}&limit=1`, requestOptions).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      console.log("Error reponse from Zacheta API")
    }
    throw new Error('API request failed')
  },
    error => console.log(error.message)
  ).then(jsonData => {
    console.log(jsonData)
    console.log(jsonData.data[0].attributes.ThumbnailUrl)
    res.send(jsonData.data[0].attributes.ThumbnailUrl);
  })
});

function random_artwork_id() {
  var min = 1
  var max = 20
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
