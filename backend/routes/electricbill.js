import express from 'express';
import expressAsyncHandler from "express-async-handler";
import Bill from '../models/bill.js';
import data from '../data.js'
const billRouter=express.Router();

//— A GET request to the base URL should list a table with all previous months electricity bill record
billRouter.get('/',expressAsyncHandler(async(req,res)=>{
const bills = await Bill.find({})
if(bills) res.send(bills)
else  res.status(402).send({message:'Opps No vets found!!'})
}))

// — A GET request to /bill/:id should list details of a particular record. This will be on click of the button from above table
billRouter.get('/data',expressAsyncHandler(async(req,res)=>{
    const allBills = await Bill.insertMany(data)
    res.send({allBills})
    }))


billRouter.get('/:id',expressAsyncHandler(async(req,res)=>{
const currentBill = await Bill.findById(req.params.id)
res.send(currentBill)
}))

//— A DELETE request to /delete/:id should delete that particular record from the database.




//— A POST request to / should submit the above form and add it to the database.
billRouter.post('/',expressAsyncHandler(async(req,res)=>{
    console.log(req.body)
    const newBill = new Bill({
        description:req.body.description,
        category:req.body.category,
        amount:req.body.amount,
        date:req.body.date

    })
    const addBill= await newBill.save()
    res.send(addBill)
}))


//— A PUT request to /:id/edit should submit the above form and change the appropriate details in the database.
billRouter.put('/:id',expressAsyncHandler(async (req,res)=>{
    const bill=await Bill.findById(req.params.id)
    if(bill){
       
            bill.description=req.body.description,
            bill.paid=req.body.paid,
            bill.amount=req.body.amount,
            bill.category=req.body.category
            bill.date=req.body.date
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