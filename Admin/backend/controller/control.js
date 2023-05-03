
const mongoose = require('mongoose')
const user = require('../model/user')

const getData = async(req,res)=>{
    let shirts;
    try{
        shirts = await user.find();
    }
    catch(err){
        console.log(err);
    }
    if(!shirts){
        return res.status(404).json({message:"Doesn't have mentioned Shirt"})
    }
    return res.status(200).json({shirts})
}

const getDataById = async(req,res)=>{
    const id = req.params.id;
    let shirt;
    try{
        shirt = await user.findById(id);
    }
    catch(err){
        console.log(err);
    }
    if(!shirt){
        return res.status(404).json({message:"Doesn't have mentioned Shirt"})
    }
    return res.status(200).json({shirt})
}

const addData = async(req,res) =>{
    const{shirtName,shirtType,price,color,size,image} = req.body;
    let cloth;
    try{
        cloth = new user({
            shirtName,
            shirtType,
            price,
            color,
            size,
            image
        })
        await cloth.save()
    }
    catch(err){
        console.log(err);
    }
    if(!cloth){
        return res.status(500).json({message:"Doesn't have mentioned Shirt"})
    }
    return res.status(201).json({cloth})
}

const updateShirt = async(req,res) =>{
    const id = req.params.id;
    const {shirtName,shirtType,price,color,size,image} = req.body;
    let shirts;
    try{
        shirts = await user.findByIdAndUpdate(id,{
            shirtName,
            shirtType,
            price,
            color,
            size,
            image
        })
        shirts = await shirts.save();
    }
    catch(err){
        console.log(err);
    }
    if(!shirts){
        return res.status(404).json({message:"Doesn't have mentioned Shirt"})
    }
    return res.status(200).json({shirts})
} 

const deleteShirt = async(req,res) =>{
    const id = req.params.id;
    let shirts;
    try{
        shirts = await user.findByIdAndRemove(id)
    }
    catch(err){
        console.log(err);
    }
    if(!shirts){
        return res.status(404).json({message:"Unable to Delete"})
    }
    return res.status(200).json({shirts})
};



exports.getData = getData;
exports.getDataById = getDataById;
exports.addData = addData;
exports.updateShirt = updateShirt;
exports.deleteShirt = deleteShirt;