const validateflight = (req,res,next)=>{
    if(
        !req.body.flightNumber || !req.body.airplaneId || !req.body.departureAirportId ||
        !req.body.arrivalAirportId || !req.body.departureTime || !req.body.arrivalTime ||
        !req.body.price

    ){
        res.status(501).json({
            message:'Something missing for create flight',
            succsess : false
        })
    }
    next();
}

module.exports={
    validateflight
}