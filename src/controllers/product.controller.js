const { authUser } = require("../middlewares/validate-user.middleware")
const { registerProduct, getOneProductById, getAllProducts, updateOneProductById, getOneProductByName } = require("../services/product.service")

const create = async (req, res) => {
  const inputData = req.body
  const authUser = req.authUser

  inputData.userId = authUser._id

  try {
    const data = await registerProduct( inputData )
    res.json({
        ok: true,
        data
    })
  } catch (error) {
    console.error( error )
    res.json({
        ok: false,
        msg: "error al crear producto"
    })
  }
}

const getByName = async (req, res) => {
    const name = req.params.name
    try {
        const data = await getOneProductByName( name )
        
        res.json({
            ok: true,
            data
        })
    } catch (error) {
        
    }
}


async function getAll(req, res) {
    try {
        const data = await getAllProducts()
        res.json({
            ok: true,
            data
        })
    } catch (error) {
        
    }
}

function removeById(req, res) {
    const msg = "elimina un producto"

    console.log(msg)
    res.json({ msg })
}

 async function updateById(req, res) {
    const id = req.params.id
    const body = req.body
  
   try {
     const update = await updateOneProductById(id, body)

    res.json({
        ok: true,
        update
    })
   } catch (error) {
      console.error( error )
      res.json({ ok: false ,msg: "error al actualizar el producto"})
   }


   
}

module.exports = {getAll,updateById,removeById,getByName,create}