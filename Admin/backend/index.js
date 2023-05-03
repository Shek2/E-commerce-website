const express = require('express')
const mongoose = require('mongoose')
const changePage = require('./routes/router')
const cors = require('cors')


require("dotenv").config();


const app = express();
const PORT = process.env.PORT | 3333;


app.use(cors());
  


app.use(express.json())


app.use('/shirts',changePage)  //localhost:3333/shirts



mongoose
.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log(`DB is Connected Successfully!`);
})
.catch((err)=>{
    console.log(err);
})

app.listen(PORT, () => console.log(`Listening at ${PORT}`));

//gHD2XWI71EZMg1km