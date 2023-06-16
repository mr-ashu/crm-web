const express = require("express");
const Task = require("../Schema/Task");
 
const app = express.Router();
 

app.get("/:id", async (req, res) => {
    const {id} = req.params;
    try {

       let task=await Task.find({employeeID : id}).populate("employeeID") 
       res.send(task)
        
    } catch (e) {
        res.status(404).send(e.message)
    }
    
})


 
 
 
 
 
app.post("/:id",async(req,res)=>{
    let {id}=req.params;

    try {
 
        let data =await Task.create({...req.body, employeeID : id})
        res.send({data:data,msg:"sucess"})
  
       
    } catch (error) {
        
    }
   
     
   })


   app.get("/employee/:id",async(req,res)=>{
    let {id}=req.params;

    try {

     
        let data =await Task.find({_id:id})
        res.send(data)
     
       
    } catch (error) {
        
    }
   
     
   })
  
 
   
 
 



module.exports = app;