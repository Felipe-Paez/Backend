require("dotenv").config()
const express = require("express")
const { dbConection } = require("./config/mongo.config")
const app = express()
const PORT = process.env.PORT
const cors = require("cors")

app.use(cors())
app.use(express.json())

app.use("/api/auth",require("./routes/auth.routes"))
app.use(

    "/api/products",
    require("./routes/product.routes")
)


dbConection()

app.listen(PORT, function() {
    console.log("Servidor escuchando en el puerto " + PORT)})