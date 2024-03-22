const { Router } = require("express")
const { create,createStyles,getAllPortfolios, getByName, getAll, getAllStyles, getAllPortfoliosByStyle, getProduct, removeById, updateById } = require("../controllers/product.controller")
const { authUser } = require("../middlewares/validate-user.middleware")
const router = Router()
console.log("product routes")



router.post("/",authUser, create)

router.get("/profile/:name",getByName)

router.post("/styles/",createStyles)

router.get("/",getAll)

router.get("/styles/",getAllStyles)

router.get("/styles/:style",getAllPortfoliosByStyle)

router.get("/:id", getProduct)

router.delete("/:id",removeById)

router.patch("/:id",updateById)

module.exports = router