//setting up the server
const express=require('express');
const bodyParser = require('body-parser');
const env=require('dotenv');

const mongoose=require('mongoose');

env.config();
const app=express();//express app object

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.get('/home',(req,res)=>{
    console.log("hitting /home");
    return res.json({
        success:true
    })
})


app.listen(process.env.PORT,async ()=>{
    //this callback function gets executed once we successfully start the server on given port
    console.log(`server started on port:${process.env.PORT}`);

    await mongoose.connect(process.env.DB_URL);
    console.log("successfully connected to mongodb");
});
 