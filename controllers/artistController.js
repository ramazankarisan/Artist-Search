const fs = require("fs");
const dotenv = require('dotenv');
dotenv.config();
const Papa = require("papaparse");
const axios = require('axios').default;


let getUrl = (name) => `http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${name}&api_key=${process.env.API_KEY}&format=json`;


async function searchArtist(name) {
  try {

    const response = await axios.get(getUrl(name));
    return response.data
  } catch (error) {
    console.error("error");
  }
}
exports.handleArtistSearch = async (req, res) => {
  try {
    const data = await searchArtist(req.params.name)
    return res.json({ data })
  } catch (error) {
    return res.send("error in search")
  }
}