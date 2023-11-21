const { Router } = require("express")
const { create, getById, getAll, removeById, updateById } = require("../controllers/product.controller")
const router = Router()
console.log("product routes")


router.post("/",create)

router.get("/",getAll)

router.get("/:id",getById)

router.delete("/:id",removeById)

router.patch("/:id",updateById)

module.exports = router