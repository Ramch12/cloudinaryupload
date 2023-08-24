import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({path:"./.env"});

mongoose.connect(process.env.MONGODB_URI).then(()=>{
  console.log("connected successfylly");
}).catch(()=>{
  console.log("failed to connect with database");
})