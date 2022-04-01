const express=require('express');
const mongoose=require('mongoose');
const authRoute=require("./route/auth");
const userroute=require("./route/user");
const app=express();
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/Bloge",{ useNewUrlParser: true,useUnifiedTopology: true }).then(res=>console.log("our db is connected")).catch(error=>console.log(error))

app.use("/api/auth",authRoute);
app.use("/api/user",userroute);

app.listen('5000',()=>{
    console.log("Backend is Running")
})