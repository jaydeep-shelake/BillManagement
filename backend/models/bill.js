import mongoose from 'mongoose'

const billSchema = new mongoose.Schema({
    billDate:{
        type:String,
        required:true
    },
    paidDate:{
        type:String,
        required:true
    },
    unitConsumed:{
        type:Number,
        required:true,
    },
    totalAmount:{
        type:Number,
        required:true
    }

},{
    timestamps:true
})

const Bill = mongoose.model("Bill",billSchema);
export default Bill