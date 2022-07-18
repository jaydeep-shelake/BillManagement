import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose'
import billRouter from './routes/electricbill.js'
import path,{dirname} from 'path'
import { fileURLToPath } from 'url';
const app = express();
app.use(express.json())  // to parse body in json format (body parser)
app.use(express.urlencoded({extended:true}))
const PORT= process.env.PORT || 5000
const uri  = "mongodb+srv://Jaydeep-shelake:Pass%40123@cluster0.dvyoz.mongodb.net/?retryWrites=true&w=majority";
//Pass%40123
mongoose.connect(uri,
    err => {
        if(err) throw err;
        console.log('connected...')
    });

// app.use(cors())

//place all routes here
app.use('/',billRouter)

//production
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(path.join(__dirname, '../frontend/build')))
if(process.env.NODE_ENV==='production'){
    //set a static folder
    app.get('*', (req, res) =>{
      res.sendFile(
        path.resolve(__dirname, '../frontend', 'build', 'index.html')
      )
     } );
} else {
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}


//listen
app.use((err,req,res,next)=>{
    res.status(500).send({message:err.message})
})

app.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`)
});