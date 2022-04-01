const router=require("express").Router();
const User=require("../model/User");
const bcrypt=require("bcrypt");

router.put("/:id",async (req,res)=>{
  if(req.body.userId===req.params.id){
      if(req.body.password){
          const salt=await bcrypt.genSalt(10);
          req.body.password=await bcrypt.hash(req.body.password,salt);
      }
    try{
     const updateduser=await User.findByIdAndUpdate(req.params.id,{
        $set:req.body, 
     },{new:true});
     res.status(200).json(updateduser);
    }
    catch(err){
  console.log(500),json(err);
    }

  } else {
      res.status(401).json("You Can't Update Another Person credential");
  }
    
})


module.exports=router