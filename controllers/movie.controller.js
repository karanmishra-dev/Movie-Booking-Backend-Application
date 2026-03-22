const Movie=require('../models/movie.model');

/**
 * Controller function to create a movie

 * @returns movie created
 */
const createMovie=async (req,res)=>{
    try{
        const movie=await Movie.create(req.body);
        return res.status(201).json({
            success:true,
            error:{},
            data:movie,
            message:'Successfully created a new movie'
        })
    }
    catch(err){ 
        console.log(err);
        return res.status(500).json({
            success:true,
            error:err,
            data:{},
            message:'Something went wrong'
        });
    }
};

const deleteMovie=async(req,res)=>{
    try{
        const response=await Movie.deleteOne({
            _id:req.params.id
        });
        return res.status(200).json({
            success:true,
            error:{},
            message:'Successfully deleted the movie',
            data:response
        });
    } catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            error:err,
            message:'Somethibg webt wrong',
            data:{}
        });
    }
}

const getMovie=async(req,res)=>{
    try{
        const movie=await Movie.findById(req.params.id);
        return res.status(200).json({
            success:true,
            error:{},
            message:'Successfully fetched the movie details',
            data:movie
        });
    } catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            error:err,
            message:'Something went wrong',
            data:{}
        })

    }
}

module.exports={
    createMovie,
    deleteMovie,
    getMovie
}