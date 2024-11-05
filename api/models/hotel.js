import mongoose from "mongoose";
const{ Schema }=mongoose;
const Hotelschema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    type:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    adress:{
        type:String,
        require:true
    },
    distance:{
        type:String,
        require:true
    },
    phoots:{
        type:[String],
        require:true
    },
    desc:{
        type:String,
        require:true
    },
    rating:{
        type:Number,
        min:0,
        max:5
    },
    rooms:{
        type:[String],
    },
    cheapestPrice:{
        type:Number,
        require:true
    },
    features:{
        type:Boolean,
        require:false
    }
});

export default mongoose.model("Hotel",Hotelschema)