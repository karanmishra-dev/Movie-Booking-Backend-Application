/* 
this object will be used as a template for building error responses
*/
const errorResponseBody={
    err:{},
    data:{},
    message:"Something went wrong, cannot find the movie requested",
    success:false
}
/*
This object will bve used as a template for building success response
*/
const successResponseBody={  
    err:{},
    data:{},
    message:'Successfully processed the request',
    success:true 
}

module.exports={
    errorResponseBody,
    successResponseBody
}