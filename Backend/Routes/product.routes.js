const express = require("express");
const { productModel } = require("../Models/productSchema");
const { auth } = require("../Middleware/auth.middleware")

const productRouter = express.Router();


// productRouter.use(auth)
productRouter.post("/create", async (req, res) => {
    try {
        const product = new productModel(req.body)
        await product.save()
        res.json({ msg: "product added successfully", product })

    } catch (error) {
        res.json({ error: error.message })
    }

})

productRouter.get("/", async(req, res) => {
    try {
        const product =await productModel.find();
        res.json(product)
        res.send(product)

    } catch (error) {
        res.json({ error: error.message })
    }

})

productRouter.patch("/update/:noteID", (req, res) => {


})

productRouter.delete("/delete/:noteID", (req, res) => {


})


module.exports = {
    productRouter
}