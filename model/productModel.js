import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    product_id:{
        type: String,
        require: true,
        trim: true,
        unquie: true
    },
    title:{
        type: String,
        require: true,
        trim: true,
        unquie: true
    },
   price:{
        type: String,
        require: true,
        trim: true,
    },
    description:{
        type: String,
        require: true,
    },
    content:{
        type: String,
        require: true,
    },
    images:{
        type: Object,
        require: true,
    },
    category:{
        type: String,
        require: true,
    },
    checked:{
        type: Boolean,
        default: false,
    },
    sold:{
        type: Number,
        default: 0,
    }
})

const products = new mongoose.model("products",productSchema)
export default products