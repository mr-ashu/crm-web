require("dotenv").config();

const express = require("express");
const cors = require("cors");
const EmployeRoute =require("./Routes/Employee")
const TaskRoute =require("./Routes/Task")
 
const connect = require("./Config/db")
const PORT = process.env.PORT || 3000

const app = express();
app.use(express.json());
app.use(cors());
 

app.use("/employee",EmployeRoute)
app.use("/task",TaskRoute)
 

app.listen(PORT, async () => {
    await connect();
    console.log(`listning to http://localhost:${PORT}`)
})