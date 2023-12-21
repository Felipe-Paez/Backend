
const { registerImage, getAllImagesByName,removeOneImageById } = require("../services/gallery.service")

const create = async (req, res) => {
  const inputData = req.body
  console.log(inputData)
  try {
    const data = await registerImage( inputData )
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

const getAllByName = async (req, res) => {
    const name = req.params.name
    try {
        const data = await getAllImagesByName( name )
        
        res.json({
            ok: true,
            data
        })
    } catch (error) {
        
    }
}

const removeById = async (req, res) => {
    const id = req.params.id
    try{
        const data = await removeOneImageById(id)
        res.json({ 
            ok:true
         })
    }
    catch(error){
    
    }

}



module.exports = {removeById,getAllByName,create}