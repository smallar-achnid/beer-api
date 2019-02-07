const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true})) 
app.use(express.json()); 
const beerRouter = require('./routes/beerRouter')
const breweryRouter = require('./routes/breweryRouter')
/////////////////////////////

app.use('/verb', (req, res) => {
    const method = req.method;
    res.send(method);
})

app.use('/api/v1/beers', beerRouter);

app.use('/api/v1/breweries', breweryRouter)

app.use('/', (req, res) => {
    res.send('Hello!');
    
})



/////////////////////////
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/beers', { useNewUrlParser: true })
mongoose.connection.on('connected', () => {
   console.log('Connected to "beers" database');
})

// mongoose.connect('mongodb://localhost:27017/breweries', { useNewUrlParser: true })
// mongoose.connection.on('connected', () => {
//    console.log('Connected to "breweries" database');
// })

mongoose.connection.on('error', (err) => {
   console.log(`Got an error!:\n${err}`);
})


const port = process.env.PORT || 4444;
app.listen(port);
console.log(`Listening on ${port}`);