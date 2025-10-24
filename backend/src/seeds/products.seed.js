import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "../models/products.model.js"; // adjust path if needed

dotenv.config({ path: "../../.env" });

const products = [
  {
    pname: "Engine Oil Filter",
    pid: "P001",
    supplierId: "S001",
    category: "Engine",
    price: 1200,
    weight: 1.2,
    stockLevel: 50,
    recLevel: 10,
  },
  {
    pname: "Air Filter",
    pid: "P002",
    supplierId: "S002",
    category: "Engine",
    price: 900,
    weight: 0.8,
    stockLevel: 40,
    recLevel: 8,
  },
  {
    pname: "Spark Plug",
    pid: "P003",
    supplierId: "S003",
    category: "Electrical",
    price: 300,
    weight: 0.2,
    stockLevel: 100,
    recLevel: 20,
  },
  {
    pname: "Brake Pads",
    pid: "P004",
    supplierId: "S004",
    category: "Brakes",
    price: 1500,
    weight: 1.0,
    stockLevel: 30,
    recLevel: 10,
  },
  {
    pname: "Clutch Plate",
    pid: "P005",
    supplierId: "S005",
    category: "Transmission",
    price: 2200,
    weight: 1.5,
    stockLevel: 25,
    recLevel: 5,
  },
  {
    pname: "Fuel Pump",
    pid: "P006",
    supplierId: "S006",
    category: "Fuel",
    price: 3500,
    weight: 2.2,
    stockLevel: 18,
    recLevel: 4,
  },
  {
    pname: "Battery 12V",
    pid: "P007",
    supplierId: "S007",
    category: "Electrical",
    price: 4500,
    weight: 6.0,
    stockLevel: 15,
    recLevel: 3,
  },
  {
    pname: "Radiator",
    pid: "P008",
    supplierId: "S008",
    category: "Cooling",
    price: 6000,
    weight: 5.5,
    stockLevel: 10,
    recLevel: 2,
  },
  {
    pname: "Carburetor",
    pid: "P009",
    supplierId: "S009",
    category: "Fuel",
    price: 2800,
    weight: 2.0,
    stockLevel: 12,
    recLevel: 4,
  },
  {
    pname: "Headlight Bulb",
    pid: "P010",
    supplierId: "S010",
    category: "Electrical",
    price: 250,
    weight: 0.1,
    stockLevel: 60,
    recLevel: 15,
  }
];

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected");

    await Product.deleteMany({});
    console.log("♻️ Existing products deleted");

    await Product.insertMany(products);
    console.log("✅ 10 products seeded successfully!");

    mongoose.disconnect();
  } catch (error) {
    console.error("❌ Error seeding data:", error);
    mongoose.disconnect();
  }
};

seedProducts();
