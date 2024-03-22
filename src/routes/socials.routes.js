const { Router } = require("express")
const { create, getAllByName,removeById} = require("../controllers/socials.controller")
const router = Router()



router.post("/", create)

router.get("/:name",getAllByName)

router.delete("/:id",removeById)


module.exports = router