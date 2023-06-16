const express = require("express");
const Employee = require("../Schema/Employee")

const app = express.Router();
 

app.get("/", async (req, res) => {
    
    try {

       let employee=await Employee.find()
       res.send(employee)
        
    } catch (e) {
        res.status(404).send(e.message)
    }
    
})
 
 
app.post("/", async (req, res) => {
    const employeeData = req.body;
    try {
    
        const employee =await  Employee.create(employeeData);
        
            res.status(201).send({ message: 'Employee added successfully' });
        
       
       } catch (e) {
          res.status(404).send(e.message)
       }
 
})

app.delete("/:id", async (req, res) => {
   
});
 
app.patch("/:id", async (req, res) => {
    let {id}=req.params;
   
});


app.get("/:id",async(req,res)=>{
    let {id}=req.params;
    try {

        let employee=await Employee.findOne({_id:id})
        res.send(employee)
         
     } catch (e) {
         res.status(404).send(e.message)
     }
     
   })
  
 
   
 
 



module.exports = app;