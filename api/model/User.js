const mongoose=require('mongoose');

const UserSchema=mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
    },
    profilepicture:{
        type:String,
        default:"",
    },
},{timestamps:true});

module.exports=mongoose.model("User",UserSchema)