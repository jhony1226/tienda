import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name:String,
        price:Number,
        stock:Number,
        description:String,
        registerDate:{type:Date, default:Date.now},
        dbStatus:Boolean,
    }
);
const product = mongoose.model("producto",productSchema);

export default product;