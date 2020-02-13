const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      if (body === "[]") {
        callback(error, body);
      } else if (error) {
        callback(error, null);
      } else if (!error) {
        const data = JSON.parse(body);
        callback(null, data[0].description);
      }
    }
  );
};

module.exports = { fetchBreedDescription };
