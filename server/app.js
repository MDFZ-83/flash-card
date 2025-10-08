const express = require('express')
const app = express()
const dotenv = require("dotenv")
const cardRouter = require("./router/card-router")
const cors = require('cors');
//dotenv().config()

app.use(cors());

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use("/api/card" , cardRouter)

const port = 5000
app.listen(port , () =>{console.log(`your lestening on port ${port}`)})