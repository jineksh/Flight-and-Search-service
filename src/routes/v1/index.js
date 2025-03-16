const express = require('express');
const Citycontroller = require('../../controllers/city-controller');
const router = express.Router();

router.post('/city',Citycontroller.create);
router.delete('/city/:id',Citycontroller.deletecity);
router.get('/city/:id',Citycontroller.get);
router.patch('/city/:id',Citycontroller.update);
module.exports = router;