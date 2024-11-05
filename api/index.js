import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const app = express();

const connect = async () => {
  try {
    await mongoose.connect(process.env.Mongo);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected!");
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected!");
});

app.get("/",(req,res)=>{
    res.sendd("hello local host")
})

app.listen(8000, () => {
  connect();
  console.log("Connected to backend");
});
