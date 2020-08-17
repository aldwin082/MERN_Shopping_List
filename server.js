const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); //allows us to take requests and take data from the body 
const path = require('path');
const items = require('./routes/api/items');

const app = express(); //initialize express into app

// Bodyparser middleware
app.use(bodyParser.json())

// DB Config
const db = require('./config/keys').mongoURI;

//connect to Mongo
mongoose
    .connect(db)
    .then(() => console.log('mongoDB connected'))
    .catch(() => console.log(err));

//any routes that use api/item/* will go to the './routes/api/items' file
app.use('/api/items', items);

// Serve static assets if in production 
if(process.env.NODE_ENV === 'production') {
  // Set static folder
  //app.use(express.static('client/build')); //access the client/build folder where the static react is located
  app.use('/static', express.static(path.join(__dirname, 'client/build')))

  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')); //this simply is the client/build/index.html file
  });
}

//for connection for heroku
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Started on port ${port}`));
