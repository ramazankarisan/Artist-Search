const fs = require("fs");
const path = require('path');

// npm package for stringify data before save the CSV file
const { stringify } = require("csv-stringify");

// func for fetching data from api
const { searchArtist } = require("../helpers/helperFunctions");

// make it dynamic filename according to the search
const filename = name => path.join(__dirname, "../csvFiles", `/${name}.csv`);

// wished column names for csv file
const columns = [
  "name",
  "mbid",
  "url",
  "image[0].#text",
  "image"
];


exports.handleArtistSearch = async (req, res) => {
  try {
    const data = await searchArtist(req.params.name)
    const { artist } = data.results.artistmatches

    // stringify the destructered results and then write them into the CSV file
    stringify(artist, {
      header: true, columns
    }, function (err, output) {
      if (err) throw err;
      fs.writeFile(filename(req.params.name), output, function (err, result) {
        if (err) console.log('error', err);
      });
    })

    return res.status(200).send("CSV file successfully written!")

  } catch (error) {
    console.log(error);
    return res.status(500).send("error in search")
  }
}