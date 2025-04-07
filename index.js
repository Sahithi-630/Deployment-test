const express = require "express";

const app = express();

app.post("/Sending-data",(req,res)=>{
    try {
        if(!email)
            return res.status(400).send({message:"Email cannot be empty"});
        (!password)
            return res.status(400).send({message:"Password cannot be empty"});
        
    } catch (error) {
        return res.status(500).send({message:"Something went wrong"});
    }
        return res.status(200).send({message:"Loggined successfully"});
       
});
    

app.listen(()=>8080)