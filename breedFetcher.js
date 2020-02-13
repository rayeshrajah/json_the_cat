const request = require("request");
const arrayBreed = process.argv.slice(2);

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${arrayBreed[0]}`,
  (error, response, body) => {
    if (!error) {
      const data = JSON.parse(body);
      console.log(data[0].description);
      process.exit;
    } else if (error === null) {
      console.log(
        "Sorry the breed is not found, or you may haave entered the breed name wrong. Please try again"
      );
      process.exit();
    } else if (error !== null && response === undefined) {
      console.log(`The domain name is the invalid and the error is ${error}`);
      process.exit();
    }
  }
);
