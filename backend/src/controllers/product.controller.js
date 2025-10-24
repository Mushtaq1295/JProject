import Product from "../models/products.model.js";


//create product
export const CreateProduct = async(req,res) => {
    const {pid} = req.body;
    try {
        if(!pid){
            return res.status(400).json({message:"Product ID is required"});
        }
        const existingProduct = await Product.findOne({pid});
        if(existingProduct){
            return res.status(400).json({message:"Product with this ID already exists"});
        }
        const newProduct = new Product(req.body);
        await newProduct.save();
        return res.status(201).json({message:"Product created successfully",data:product});
    } catch (error) {
        console.log("Error in CreateProduct controller",error.message)
        return res.status(500).json({message:"Internal server error",error:error.message});
    }
}

//get all products
export const getAllProducts = async(req,res) => {
    try {
        const products = await Product.find({});
        return res.status(200).json({message:"Products fetched successfully",data:products});

    } catch (error) {
        console.log("Error in getAllProducts controller",error.message)
        return res.status(500).json({message:"Internal server error",error:error.message});
    }
};

//get product by ID
export const getProductById = async(req,res) => {
    const {id} = req.params;
    try {
        const product = await Product.findById(id);
        if(!product){
            return res.status(404).json({message:"Product not found"});
        }
        return res.status(200).json({message:"Product fetched successfully",data:product});
    } catch (error) {
        console.log("Error in getProductById controller",error.message)
        return res.status(500).json({message:"Internal server error",error:error.message});
    }
};

//update product
export const updateProduct = async(req,res) => {
    const {id} = req.params;
    const productData = req.body;
    if(!id){
        return res.status(400).json({message:"Product ID is required"});
    }
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, productData, {new:true});
        if(!updatedProduct){
            return res.status(404).json({message:"Product not found"});
        }
        return res.status(200).json({message:"Product updated successfully",data:updatedProduct});
    } catch (error) {
        console.log("Error in updateProduct controller",error.message)
        return res.status(500).json({message:"Internal server error",error:error.message});
    }
};

//delete product
export const deleteProduct = async(req,res) => {
    const {id} = req.params;
    if(!id){
        return res.status(400).json({message:"Product ID is required"});
    }
    try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        if(!deletedProduct){
            return res.status(404).json({message:"Product not found"});
        }
        return res.status(200).json({message:"Product deleted successfully",data:deletedProduct});
    } catch (error) {
        console.log("Error in deleteProduct controller",error.message)
        return res.status(500).json({message:"Internal server error",error:error.message});
    }
};
