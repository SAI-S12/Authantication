const express=require("express")
const User=require("../modules/user")


const register=async (req,res)=>{
    try{
        const {username,email,password}=req.body
        const exist = await User.findOne({email})
        if(exist){
            return res.status(402).send ("email already existed ")
        }
         const  userCreated= await User.create({username,email,password})

          res.status(200).send({userCreated})
    }
    catch(err){
        res.status(400).send("no no no dont come to thse page")
    }
}

module.exports={register}
