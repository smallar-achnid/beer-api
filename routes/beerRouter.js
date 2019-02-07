const express = require('express');
const beerRouter = express.Router();
const Beer = require('../models/beer')


beerRouter.put('/:beer_id', (req, res) => {
    Beer.findById(req.params.beer_id, (err, beer) => {
        if (err) {
            res.send(err)
        }else {
            beer.name = req.body.name
            beer.rating = req.body.rating
 
            beer.save((err, document) => {
            if (err) {
                res.status(400).send(err)
            } else {
                res.status(200).json(`Beer posted!\n${document}`)
            }
            
        })}       
    })
 })

beerRouter.delete('/:beer_id', (req, res) => {
    Beer.deleteOne({
        _id: req.params.beer_id
    }, (err) => {
        if (err) {
            res.send(err)
        } else {
        res.send('You successfully deleted beer: ' + req.params.beer_id)
    }})
 })

beerRouter.get('/:beer_id', (req, res) => {
    Beer.findById(req.params.beer_id, (err, beer) =>{
        if (err) {
            res.status(400)
            .send(err);
        } else {
            res.json(beer);
        }
    })
});

beerRouter.get('/', (req, res) => {
    Beer.find((err, beers) =>{
        if (err) {
            res.status(400).send(err);
        } else {
            res.json(beers);
        }
    })
});




function posting (req, res) {
    let beer = new Beer();
    beer.name = req.body.name;
    beer.rating = req.body.rating;
    beer.save((err, document) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).send(`saved your ${document}`);
        }
    });
}

beerRouter.post('/', posting);
    // console.log(req.body);
    // res.send(`Thank you for your rating of ${req.body.rating} for ${req.body.name}!`);


//practicing encapsulating functions
function beerRouterisWorking(req, res){
    res.send('Beer router is working')
}

beerRouter.use('/', beerRouterisWorking);

module.exports = beerRouter