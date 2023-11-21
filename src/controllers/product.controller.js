const { registerProduct, getOneProductById, getAllProducts, updateOneProductById } = require("../services/product.service")

const create = async (req, res) => {
  const inputData = req.body
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

const getById = async (req, res) => {
    const id = req.params.id
    try {
        const data = await getOneProductById( id )
        
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

module.exports = {getAll,updateById,removeById,getById,create}