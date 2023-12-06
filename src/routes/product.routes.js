const { Router } = require("express")
const { create, getByName, getAll, removeById, updateById } = require("../controllers/product.controller")
const router = Router()
console.log("product routes")


router.post("/0"
,create)

router.get("/",getAll)

router.get("/:name",getByName)

router.delete("/:id",removeById)

router.patch("/:id",updateById)

module.exports = router