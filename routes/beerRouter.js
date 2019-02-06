const express = require('express');
const beerRouter = express.Router();

beerRouter.get('/', (req, res) => {
    res.send('pretend beers ;)');
})

beerRouter.post('/', (req, res) => {
    console.log(req.body);
    res.send(`Thank you for your rating of ${req.body.rating} for ${req.body.name}!`);
})

beerRouter.use('/', (req, res) => {
    res.send('Beer router is working!');
})

module.exports = beerRouter;