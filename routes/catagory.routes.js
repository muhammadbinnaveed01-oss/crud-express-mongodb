const express= require('express')
const {usercreate,userdelete,userfind,userupdate}=require('../controller/catagorymongodb.js')
const router = express.Router();

router.post("/",async (req,res)=>{
try {
    const user= await usercreate(req.body);
  res.json(user);
} catch (e) {
  res.status(500).json({type:'server error',code:500,message:e.message})
}
});

router.get("/",async(req,res)=>{
try {
    const user= await userfind()
  res.json(user);
} catch (e) {
   res.status(500).json({type:'server error',code:500,message:e.message})
}
});


router.put("/:id",async (req,res)=>{
  try {
    const user= await userupdate(req.params.id,req.body);
    res.json(user);
  } catch (e) {
      res.status(500).json({type:'server error',code:500,message:e.message})

  }
});

router.delete("/:id",async(req,res)=>{
try {
    const user = await userdelete(req.params.id);
  res.json(user);
} catch (e) {
  res.status(500).json({type:'server error',code:500,message:e.message})
}
})

module.exports=router;