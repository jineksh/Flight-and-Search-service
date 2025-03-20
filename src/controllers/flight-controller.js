const {FlightService}=require('../services/index');
const {StatusCodes} = require('http-status-codes');
const flightservice = new FlightService();

const createflight = async(req,res)=>{
    try{
        const flight = await flightservice.createflight(req.body);
        return res.status(StatusCodes.CREATED).json({
            data:flight,
            message : 'All flight created',
            sucsees:true
        });
    }
    catch(err){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data : err,
            message : 'ALl City is not created',
            sucsees : false
        })
    }
}

const deleteflight = async(req,res)=>{
    try{
        const response = await flightservice.deleteflight(req.params.id);
        return res.status(StatusCodes.OK).json({
            data:response,
            message:"Flight is deleted",
            success : true
        })
    }
    catch(err){
        return res.status(StatusCodes.FORBIDDEN).json({
            data: err,
            success: false,
            Message: 'Flight is not deleted'
        })
    }
}

const updateflight = async(req,res)=>{
    try{
        const flight = await flightservice.updateflight(req.params.id,req.body);
        return res.status(StatusCodes.OK).json({
            data:flight,
            message:"Flight is created",
            success : true
        })
    }
    catch(err){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data: err,
            success: false,
            Message: 'Flight not updated'
        })
    }
}


const getflight = async(req,res)=>{
    try{
        const flight = await flightservice.getflight(req.params.id);
        return res.status(StatusCodes.OK).json({
            data:flight,
            message:"Flight is fetched",
            success : true
        })
    }
    catch(err){
        return res.status(StatusCodes.NO_CONTENT).json({
            data: err,
            success: false,
            Message:'Flight not fetched'
        })
    }
}

const getallflight = async(req,res)=>{
    try{
        const flight = await flightservice.getallflight(req.query);
        return res.status(StatusCodes.OK).json({
            data:flight,
            message:"all Flight is fetched",
            success : true
        })
    }
    catch(err){
        return res.status(StatusCodes.BAD_REQUEST).json({
            data: err,
            success: false,
            Message:'Flight not fetched'
        })
    }
}

module.exports={
    createflight,deleteflight,updateflight,getallflight,getflight
}