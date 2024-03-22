const { registerSocial, getAllSocialsByName,removeOneSocialById } = require("../services/socials.service")

const create = async (req, res) => {
  const inputData = req.body
  console.log(inputData)
  try {
    const data = await registerSocial( inputData )
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
        const data = await getAllSocialsByName( name )
        
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
        const data = await removeOneSocialById(id)
        res.json({ 
            ok:true
         })
    }
    catch(error){
    
    }

}



module.exports = {removeById,getAllByName,create}