const { randomName, searchArtist } = require("../helpers/helperFunctions");

//middleware to check provided artist name is available in the api and gives no empty results
exports.validateResult = async (req, res, next) => {
  try {

    req.params.name = await checkTheResults(req.params.name)

    next();

  } catch (error) {
    console.log(error);
    return res.status(500).send("unavailable definition for searching")
  }
}

// function to set a random name from mock json file and recursively assures its result also never will be empty
async function checkTheResults(name) {
  let data = await searchArtist(name)
  if (data && data.results.artistmatches.artist.length > 0) {
    return name
  } else {
    return checkTheResults(randomName())
  }
}