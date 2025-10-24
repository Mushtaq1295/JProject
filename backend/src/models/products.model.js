import mongoose from 'mongoose';


const productSchema = new mongoose.Schema(
    {
        pname: {
            type: String,
            required: true,
        },
        pid: {
            type: String,
            required: true,
        },
        supplierId: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        weight: {
            type: Number,
            required: true,
        },
        stockLevel: {
            type: Number,
            required: true,
        },
        recLevel: {
            type: Number,
            required: true,
        },
    },
    {timestamps: true}
);
const Product = mongoose.model('Product',productSchema);
export default Product;



// Product Name
// Product ID
// Supplier ID
// Category
// Price
// Weight
// Stock Level
// Rec. Level
// Actions
// (in units)