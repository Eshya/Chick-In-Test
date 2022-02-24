require("dotenv").config()
const axios = require('axios');
const mergeJSON = require('merge-json');
const groupBy = require('json-groupby');
const fs = require('fs');
var path = require('path');
const { average,
        median } = require("../utils/utils.js")
const doQ1 = async (req,res) => {
    
    try{
        
    }
    catch(err){
        return res.json({message: err});
    }
}
const doQ2 = async (req,res) => {
    try{
        
    }
    catch(err){
        return res.json({message: err});
    }
    
   
    
    
}
const doQ3 = async (req,res) => {
    try{
        
    }
    catch(err){
        return res.json({message: err});
    }
    
   
    
    
}
const doQ4 = async (req,res) => {
    try{
        
    }
    catch(err){
        return res.json({message: err});
    }
    
   
    
    
}
const doQ5 = async (req,res) => {
    try{
        
    }
    catch(err){
        return res.json({message: err});
    }
    
   
    
    
}
const getPDF = (req,res) => {
    console.log("PDF");
    res.sendFile(path.resolve('./file/Technical test nodejs.pdf'), function (err) {
        if (err) {
            console.log(err);
            return res.json({message: err});
        } else {
            console.log('Sent:', "Technical test nodejs.pdf");
        }
    })
    try{
        
    }
    catch(err){
        return res.json({message: err});
    }
    
   
    
    
}



module.exports = {
    doQ1,
    doQ2,
    doQ3,
    doQ4,
    doQ5,
    getPDF
}
