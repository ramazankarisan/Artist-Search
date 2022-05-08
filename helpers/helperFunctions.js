const dotenv = require('dotenv');
dotenv.config();
const axios = require('axios').default;

const randomNamesData = require('./Mock_Data.json');

// to make dynamically a url according to the parameter
let getUrl = (name) => `http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${name}&api_key=${process.env.API_KEY}&format=json`;

// func to fetch data from API
const searchArtist = async (name) => {
  try {
    const response = await axios.get(getUrl(name));
    return response.data
  } catch (error) {
    console.error("error in fetching");
  }
}

// select randomly a name from the mock json file
function randomName() {
  let index = Math.floor(Math.random() * randomNamesData.length)
  return randomNamesData[index].first_name
}

module.exports = { searchArtist, randomName }