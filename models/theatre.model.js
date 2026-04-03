const mongoose=require('mongoose');
/**
 * Defines the schema for the theatre to be stored in the db
 */

const theatreSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:String,
    city:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    },
    address:String
},{timestamps:true});

const theatre=mongoose.model('theatre',theatreSchema);

module.exports=theatre;  