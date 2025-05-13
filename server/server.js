require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

cors({
  origin: process.env.CLINET_URL,
  methods: ["GET", "POST", "DELETE", "PUT"],
  allowedHeaders: ["Content-Type", "Authorization"],
});

app.use(express.json());

mongoose
  .connect(MONGO_URI, { dbName: "LMS" })
  .then(() => console.log("db connection"))
    .catch((e) => console.log(e));
  

// routes configureation
    



  app.use((error,req,res,next)=>{
      console.log(error.stack);
      res.status(500).json({
          success: false,
          message:"Something went wrong"
      })
  })

  app.listen(PORT,()=>console.log("server is running http://localhost:",PORT))