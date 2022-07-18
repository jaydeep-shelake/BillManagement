import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose'
import billRouter from './routes/electricbill.js'
const app = express();
app.use(express.json())  // to parse body in json format (body parser)
app.use(express.urlencoded({extended:true}))
const PORT= process.env.PORT || 5000
const uri  = "mongodb://Jaydeep-shelake:Pass%40123@cluster0-shard-00-00.dvyoz.mongodb.net:27017,cluster0-shard-00-01.dvyoz.mongodb.net:27017,cluster0-shard-00-02.dvyoz.mongodb.net:27017/?ssl=true&replicaSet=atlas-wt8c8d-shard-0&authSource=admin&retryWrites=true&w=majority";
//Pass%40123
mongoose.connect(uri,
    err => {
        if(err) throw err;
        console.log('connected...')
    });

app.use(cors())

//place all routes here
app.use('/',billRouter)
//listen
app.use((err,req,res,next)=>{
    res.status(500).send({message:err.message})
})

app.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`)
});