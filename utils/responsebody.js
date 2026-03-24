
const errorResponseBody={
    err:{},
    data:{},
    message:"Something went wrong, cannot find the movie requested",
    success:false
}

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