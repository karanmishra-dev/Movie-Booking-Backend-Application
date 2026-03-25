const mongoose=require('mongoose');
/**
 * Define the schema of the movie resource to be stored in the db
 */

const movieSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:2
    },
    description:{
        type:String,
        required:true,
        minLength:5
    },
    casts:{
        type:[String],
        required:true
    },
    trailerUrl:{
        type:String,
        required:true
    },
    language:{
        type:String,
        required:true,
        default:"English"
    },
    releaseDate:{
        type:String,
        required:true
    },
    director:{
        type:String,
        required:true
    },
    releaseStatus:{
        type:String,
        required:true,
        default:"RELEASE"
    }
},{timestamps:true}) //timestamps will automatically add createAt and updateAt fields to the document

const Movie=mongoose.model('Movie',movieSchema);// createing the new model using movieschema and will be used to perform CRUD operations on the movie collection in the db

module.exports=Movie; //returning the Movie model to be used in other files

