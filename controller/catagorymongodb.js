const mongoose = require('mongoose');

// Define schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true   // 🚀 no duplicate names allowed
  },
  rank: {
    type: Number,
    minlength: 0,
    required: false
  },
  description: {
    type: String,
    minlength: 10,
  }
});

// Create model
const User = mongoose.model("User", userSchema);

async function usercreate(data){
  return await User.create(data);

}

async function userfind() {
  return await User.find();

}

async function   userupdate(id,data) {
  return await User.findByIdAndUpdate(id,data,{new :true})
}

async function userdelete(id){
  return await User.findByIdAndDelete(id)
  
}


 module.exports ={usercreate,userfind,userupdate,userdelete}
