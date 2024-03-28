const mongoose = require("mongoose");


const produtSchema = mongoose.Schema({
    "todo": String,
    "completed": String
}, {
    versionKey: false
})

const productModel = mongoose.model("datas", produtSchema);

module.exports = {
    productModel
}