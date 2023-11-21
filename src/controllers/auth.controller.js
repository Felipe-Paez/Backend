const {registerUser,loginUser,getUsername, getEmail, getNumber} = require("../services/auth.service")

const register = async (req, res) => {
  //registro
  const inputData = req.body
  try {
    const data = await registerUser( inputData )
    res.json({
        ok: true,
        data
    })
  } catch (error) {
    console.error( error )
    res.json({
        ok: false,
        msg: "error al registrarse"
    })
  }
}

const login = async (req, res) => {
  const user = req.body
    try {
      const data = await loginUser(user)
        res.json({
            ok: true,
            data
        })
    } catch (error) {
        
    }
}

module.exports= { login,register}