import express, { query } from 'express';
import expressAsyncHandler from "express-async-handler";
import Bill from '../models/bill.js';
const billRouter=express.Router();

//— A GET request to the base URL should list a table with all previous months electricity bill record
billRouter.get('/',expressAsyncHandler(async(req,res)=>{
   
    const limit=parseInt(req.query.limit)
   
const bills = await Bill.find({})
const paginateBill=bills.slice(0,limit)
console.log(limit)
console.log("paginatedbills",paginateBill)
if(bills) res.send(paginateBill)
else  res.status(402).send({message:'Opps No bill found!!'})
}))

//— A GET request to /bill/:id should list details of a particular record. This will be on click of the button from above table

billRouter.get('/:id',expressAsyncHandler(async(req,res)=>{
const currentBill = await Bill.findById(req.params.id)
res.send(currentBill)
}))

//— A DELETE request to /delete/:id should delete that particular record from the database.

billRouter.get('/:id',expressAsyncHandler(async(req,res)=>{
    
    await Bill.deleteOne({_id:req.params.id})
    res.send(req.params.id)
    }))


//— A POST request to / should submit the above form and add it to the database.
billRouter.post('/',expressAsyncHandler(async(req,res)=>{
    console.log(req.body)
    const newBill = new Bill({
        billDate:req.body.billDate,
        paidDate:req.body.paidDate,
        unitConsumed:req.body.unitConsumed,
        totalAmount:req.body.totalAmount
    })
    const addBill= await newBill.save()
    res.send(addBill)
}))


//— A PUT request to /:id/edit should submit the above form and change the appropriate details in the database.
billRouter.put('/:id',expressAsyncHandler(async (req,res)=>{
    const bill=await Bill.findById(req.params.id)
    if(bill){
       
            bill.billDate=req.body.billDate,
            bill.paidDate=req.body.paidDate,
            bill.unitConsumed=req.body.unitConsumed,
            bill.totalAmount=req.body.totalAmount
            const newBill = await bill.save()
            res.send(newBill)
    }
    else  res.status(404).send({message:'bill not found !'})
    
}))

//— A DELETE request to /delete/:id should delete that particular record from the database.
billRouter.delete('/:id',expressAsyncHandler(async(req,res)=>{
    await Bill.deleteOne({_id:req.params.id})
    res.send(req.params.id)
}))

export default billRouter