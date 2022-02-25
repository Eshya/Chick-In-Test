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
        var arr = body;
        var result = [];

        for (var i = 0; i < arr.length; i++) {
        var found = false;
        for (var j = 0; j < result.length; j++) {
            if (result[j].id == arr[i].id && result[j].name == arr[i].name) {
            found = true;
            result[j].nodes = result[j].nodes.concat(arr[i].nodes);
            break;
            }
        }
        if (!found) {
            result.push(arr[i]);
        }
        }
        // for (let [key, value] of Object.entries(body)) {
        //     newJSON[value] = [];
        //     newJSON[value].push(key);
        // }
        console.log(result);
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
