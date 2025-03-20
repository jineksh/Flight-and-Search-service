const express = require('express');
const Citycontroller = require('../../controllers/city-controller');
const Flightcontroller = require('../../controllers/flight-controller');
const flightmiddleware = require('../../middlewares/flightmiddlewares');
const router = express.Router();

router.post('/city',Citycontroller.create);
router.delete('/city/:id',Citycontroller.deletecity);
router.get('/city/:id',Citycontroller.get);
router.patch('/city/:id',Citycontroller.update);
router.get('/city',Citycontroller.getallcity);
router.post('/cities',Citycontroller.createall);

router.post('/flights',flightmiddleware.validateflight,Flightcontroller.createflight);
router.get('/flights',Flightcontroller.getallflight);
router.get('/flights/:id',Flightcontroller.getflight);
router.patch('/flights/:id',Flightcontroller.updateflight);
router.delete('/flights/:id',Flightcontroller.deleteflight);

module.exports = router;