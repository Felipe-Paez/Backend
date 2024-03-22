require("dotenv").config()
const express = require("express")
const { dbConection } = require("./src/config/mongo.config")
const app = express()
const PORT = process.env.PORT
const cors = require("cors")

app.use(cors())
app.use(express.json())

app.use("/api/auth",require("./src/routes/auth.routes"))
app.use(

    "/api/portfolio",
    require("./src/routes/product.routes")
)
app.use("/api/gallery",require("./src/routes/gallery.routes"))
app.use("/api/socials",require("./src/routes/socials.routes"))

dbConection()

app.listen(PORT, function() {
    console.log("Servidor escuchando en el puerto " + PORT)})