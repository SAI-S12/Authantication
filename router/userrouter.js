const express=require("express")
const usontroller=require("../controls/register")
const router=express.Router()

router.post("/reg" , usontroller.register)

module.exports=router;