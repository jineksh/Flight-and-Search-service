const { CityService } = require('../services/index');
const cityservice = new CityService();

const create = async(req,res)=>{
    try{
        const city = await cityservice.createcity(req.body);
        return res.status(201).json({
            data : city,
            message : 'City created',
            sucsees : true
        });
    }catch(err){
        return res.status(400).json({
            data : err,
            message : 'City is not created',
            sucsees : false
        })
    }
}


const deletecity = async(req,res)=>{
    try{
        const response = await cityservice.deletecity(req.params.id);
        return res.status(201).json({
            data : response,
            message : 'City deleted',
            sucsees : true
        });
    }catch(err){
        return res.status(400).json({
            data : err,
            message : 'City is not deleted',
            sucsees : false
        })
    }
}


const update = async(req,res)=>{
    try{
        const city = await cityservice.updatecity(req.params.id,req.body);
        return res.status(201).json({
            data : city,
            message : 'City updated',
            sucsees : true
        });
    }catch(err){
        return res.status(400).json({
            data : err,
            message : 'City is not updated',
            sucsees : false
        })
    }
}



const get = async(req,res)=>{
    try{
        const city =await cityservice.getcity(req.params.id);
        return res.status(201).json({
            data : city,
            message : 'City fetched',
            sucsees : true
        });
    }catch(err){
        return res.status(400).json({
            data : err,
            message : 'City is not fetched',
            sucsees : false
        })
    }
}


const getallcity = async(req,res)=>{
    try{
        const city =await cityservice.getallcity(req.query);
        return res.status(201).json({
            data : city,
            message : 'City fetched',
            sucsees : true
        });
    }catch(err){
        return res.status(400).json({
            data : err,
            message : 'City is not fetched',
            sucsees : false
        })
    }
}


const createall = async(req,res)=>{
    try{
        console.log(req.body);
        const cities = await cityservice.createallcity(req.body);
        return res.status(200).json({
            data: cities,
            message : 'All cities created',
            sucsees:true
        })
    }
    catch(err){
        return res.status(400).json({
            data : err,
            message : 'ALl City is not created',
            sucsees : false
        })
    }
}
module.exports = {
    create,deletecity,update,get,getallcity,createall
}