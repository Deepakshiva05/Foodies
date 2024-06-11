const mongoose=require('mongoose');

const ReactSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },

})

const FoodieUser=mongoose.model("FoodieUser",ReactSchema);

module.exports=FoodieUser;