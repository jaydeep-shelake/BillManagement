import mongoose from 'mongoose'

const billSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    amount:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true
    },
    paid:{
        type:Boolean,
        default:false
    }

},{
    timestamps:true
})

const Bill = mongoose.model("Bill",billSchema);
export default Bill