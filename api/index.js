import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import auth from "./routes/auth";
import hotels from "./routes/hotels";
import rooms from "./routes/rooms";
import users from "./routes/users";
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

//middlewares
app.use("/api/auth",auth);
app.use("/api/users",users);
app.use("/api/rooms",rooms);
app.use("/api/hotels",hotels);



app.listen(8000, () => {
  connect();
  console.log("Connected to backend");
});
