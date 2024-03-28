const express = require("express");
const { connection } = require("./db");
const { ueserRoutes } = require("./Routes/user.routes");
const { productRouter } = require("./Routes/product.routes");

const app = express();
app.use(express.json());
app.use("/users", ueserRoutes);
app.use("/products", productRouter);
const cors = require("cors")

app.listen(8080, async () => {
    try {
        await connection
        console.log("Connect to db");
        console.log("server is runnign at port", 8080);
    } catch (error) {
        console.log("Something went wrong");

    }
})