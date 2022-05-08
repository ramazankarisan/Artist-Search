# Artist Search Node.js Application

## About

this Node.js application is a RESTApi service and enables anyone to search artist names in the [Last.fm API](https://www.last.fm/api/show/artist.search). Then creates a **CSV** file with the given name and writes some information from the API results. If there is no result, randomly will be selected a name from mock json file and will use it.

## Installation

 - Clone the repo with  `git clone    https://github.com/ramazankarisan/Artist-Search.git`
 - Go inside the   folder `cd Artist-Search/`
 - Go to api [website](https://www.last.fm/api#getting-started) and get an API key and write that in the root folder inside the **`.env.example`** file and change the file name just **`.env`**
 -  Install required packages `npm install`
 - If you have run server with nodemon `nodemon server.js`
  
> If you dont have nodemon to install it globally to your system `npm
> install -g nodemon`
 - or just run `node server.js`

## To run application

- This is available right now just in backend, so in order to run and test the app, we have to use tools like **insomnia** or **postman**.
- In the url section either insomnia or postman just write
  http://localhost:4000/artist/search/:parameter

- With changing your parameter, you will see a new **CSV** file will be added inside to the **csvFiles** folder.

![search-incedo](https://user-images.githubusercontent.com/83083783/167317691-7b4afb25-8433-43c3-95e3-effc61f7266f.png)
![search-incedo-2](https://user-images.githubusercontent.com/83083783/167317696-25f7cf72-c21c-4238-a264-7870e39490e3.png)










