//setting up the server
const express=require('express');
const bodyParser = require('body-parser');
const env=require('dotenv');


const mongoose=require('mongoose');

const MovieRoutes=require('./routes/movie.routes');
env.config();

const theatreRoutes=require('./routes/theatre.routes')
const app=express();//express app object

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

MovieRoutes(app); //invoking movies routes

theatreRoutes(app);// invoking theatre routes
app.get('/home',(req,res)=>{
    console.log("hitting /home");
    return res.json({
        success:true
    })
})


app.listen(process.env.PORT,async ()=>{
    //this callback function gets executed once we successfully start the server on given port
    console.log(`server started on port:${process.env.PORT}`);

    try{
        await mongoose.connect(process.env.DB_URL);
        console.log("connected to mongo");

        // await Movie.create({
        //     name:"Example Movie",
        //     description:"sample Movie descrp",
        //     casts:["c1","c2"],
        //     director:"sample",
        //     trailerUrl:"http://example/trailer/1",
        //     language:"Hindi",
        //     releaseDate:"18-03-2026",
        //     releaseStatus:"RELEASE"
        // });

    }catch(err){
        console.log("not connected to mongo",err);
    }
});
 