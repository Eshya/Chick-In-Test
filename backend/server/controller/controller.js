require("dotenv").config()
const axios = require('axios');
const mergeJSON = require('merge-json');
const groupBy = require('json-groupby');
const fs = require('fs');
var path = require('path');
const testModel = require('../model/test.model');
const { average,
        median } = require("../utils/utils.js");
const { Console } = require("console");
const doQ1 = async (req,res) => {
    
    try{
      const {body} = req;
    //   console.log(body);
        let AllData = [];
        body.forEach(element => {
            element.forEach(value=>{
                AllData.push(value);             
            }) ;   
        });
        let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)
        res.json(findDuplicates(AllData));    
    }
    catch(err){
        return res.json({message: err});
    }
}
const doQ2 = async (req,res) => {
    try{
        const {body} = req;
        let newJSON = new Object();
        
       
        for (let [key, value] of Object.entries(body)) {
            
            if(newJSON.hasOwnProperty(value)){
                let appendArray = newJSON[value];
                
                appendArray.push(key);
                console.log(appendArray);
                newJSON[value]= appendArray;
            }
            else{
                newJSON[value] = [];
                newJSON[value].push(key);
            }
           
        }
        res.json(newJSON);    
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
    // console.log(req);
    try{
        const {body} = req;
        console.log(req);
        const newTest = new testModel({
            message: body.msg, // placeholder for now
            created_at: Date.now()
        });
        newTest.save((err, data)=>{
            if(err) return res.json({Error: err});
            
            return res.json(data);
        })
    }
    catch(err){
        return res.json({message: err});
    }
    
   
    
    
}
const getPDF = (req,res) => {
   
    try{
        console.log("PDF");
        res.sendFile(path.resolve('./file/Technical test nodejs.pdf'), function (err) {
            if (err) {
                console.log(err);
                return res.json({message: err});
            } else {
                console.log('Sent:', "Technical test nodejs.pdf");
            }
        })
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
