const express=require("express")
const mongoose=require("mongoose")
const port=3000;
const userRoutes=require("./router/userrouter");
const bodyParser = require("body-parser");
 
const app=express();
app.use(bodyParser.json())

mongoose.connect("mongodb+srv://sssainath12:krbUjC2oQ65AcMDT@cluster0.adfbpbx.mongodb.net/practice")
.then(()=>{
    console.log("connected succesfully");
})
.catch((err)=>{
    console.log("not connected");
})

app.use("/auth" , userRoutes)

app.listen(port, ()=>{
    console.log(`server started on port ${port}`);
})