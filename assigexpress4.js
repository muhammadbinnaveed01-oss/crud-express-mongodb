require('dotenv').config();
const routes= require('./routes/catagory.routes.js');
const path=require('path');
const mongoose= require('mongoose');
const express =require('express');

const app = express();

const port= process.env.PORT
const host= process.env.HOST
app.use("/user",routes);
app.use(express.json())


mongoose.connect(process.env.MONGO_URI )
.then(()=>{
console.log(`the mongodb is connected`)
app.listen(port,host,()=>{
    console.log(`the link is working`)
})
})
.catch(err => console.error("❌ DB Error:", err));
