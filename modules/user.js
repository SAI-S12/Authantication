const mongoose=require("mongoose")


const userScema= new mongoose.Schema({
    email:{type:String , reuire:true},
    username:{type:String , reuire:true},
    password:{type:String , reuire:true}

})

const User=new mongoose.model("User",userScema)
module.exports= User;