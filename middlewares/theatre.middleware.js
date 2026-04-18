const {errorResponseBody}=require ('../utils/responsebody');

const validateTheatreCreateRequest=async (req,res,next)=>{
    //validate the presence of name
    if(!req.body.name){
        errorResponseBody.message="The name of the theatre is not preesent in the request";
        return res.status(400).json(errorResponseBody)
    }
    //validation for the presence of pincode
    if(!req.body.pincode){
        errorResponseBody.message="The pincode of the theatre is not present in the request";
        return res.status(400).json(errorResponseBody);
    }

    //validation for the presence of the city
    if(!req.body.city){
        errorResponseBody.message="The city of the theatre is not present in the request";
        return res.status(400).json(errorResponseBody);
    }

    next();//everything is fine move to the next middleware
}

const validateUpdateMoviesRequest= async(req,res,next)=>{
    //validation of insert parameter in the request body
    if(req.body.insert==undefined){
        errorResponseBody.message="The insert parameter is missing in the request";
        return res.status(400).json(errorResponseBody);
    }
    //validate movieIds presence
    if(!req.body.movieIds){
        errorResponseBody.message="No movies present in the request to be updated in the theatre";
        return res.status(400).json(errorResponseBody);
    }
    //validate if movieIds is an array or not 
    if(!(req.body.movieIds instanceof Array)){
        errorResponseBody.message="Expected array of movies but found something else";
        return res.status(400).json(errorResponseBody);
    }
    //validate if movieIds is empty or not
    if(req.body.movieIds.length==  0){
        errorResponseBody.message="No movies present in the array provided";
        return res.status(400).json(errorResponseBody);
    }
    //everything is fine
    next(); 
}

module.exports={
    validateTheatreCreateRequest,
    validateUpdateMoviesRequest

} 