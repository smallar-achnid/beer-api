const express = require('express');
const breweryRouter = express.Router();
const Brewery = require('../models/brewery')


breweryRouter.put('/:brewery_id', (req, res) => {
    Brewery.findById(req.params.brewery_id, (err, brewery) => {
        if (err) {
            res.send(err)
        }else {
            brewery.name = req.body.name
            brewery.address = req.body.address
            brewery.favorite = req.body.favorite
 
            brewery.save((err, document) => {
            if (err) {
                res.status(400).send(err)
            } else {
                res.status(200).json(`brewery posted!\n${document}`)
            }
            
        })}       
    })
 })

breweryRouter.delete('/:brewery_id', (req, res) => {
    Brewery.deleteOne({
        _id: req.params.brewery_id
    }, (err) => {
        if (err) {
            res.send(err)
        } else {
        res.send('You successfully deleted brewery: ' + req.params.brewery_id)
    }})
 })

breweryRouter.get('/:brewery_id', (req, res) => {
    Brewery.findById(req.params.brewery_id, (err, brewery) =>{
        if (err) {
            res
            .status(400)
            .send(err);
        } else {
            res.json(brewery);
        }
    })
});

function getBrewery (req, res) {
    Brewery.find((err, brewerys) =>{
        if (err) {
            res.status(400).send(err);
        } else {
            res.json(brewerys);
        }
    })
}
breweryRouter.get('/', getBrewery);


breweryRouter.post('/', (req, res) => {
    let brewery = new Brewery();
    brewery.name = req.body.name;
    brewery.address = req.body.address;
    brewery.favorite = req.body.favorite;
    brewery.save((err, document) => {
        if (err) {
            res.status(400).send(err);
        }
        else {
            res.status(200).send(`Saved your object: ${document}`)
        }
    });
})

//practicing encapsulating functions
function breweryRouterisWorking(req, res){
    res.send( 'Brewery router is working')
}

breweryRouter.use('/', breweryRouterisWorking);

module.exports = breweryRouter