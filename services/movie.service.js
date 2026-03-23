const Movie=require('../models/movie.model');

const getMovieById=async(id)=>{
    if(!id){
        return{
            err:"No movie found for the corresponding id provided",
            code:404
        }
    };
    return await Movie.findById(id);
}

module.exports={
    getMovieById 
}