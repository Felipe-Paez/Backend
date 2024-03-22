const { authUser } = require("../middlewares/validate-user.middleware")
const ProductModel = require("../models/products")
const { registerProduct,registerStyles, getAllProducts, updateOneProductById, getOneProductByName } = require("../services/product.service")

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

const createStyles = async (req, res) => {
    const inputData = req.body  
    try {
      const data = await registerStyles( inputData )
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

const getProduct = async (req, res) => {
	const id = req.params.id;

	await ProductModel.findOne({
		id,
	})
		.select(['-_id'])
		.then((product) => {
			res.json(product);
		})
		.catch((err) => console.log(err));
};

const getByName = async (req, res) => {
    const name = req.params.name
    console.log("hola")
    try {
        const data = await getOneProductByName( name )
        
        res.json({
            ok: true,
            data
        })
    } catch (error) {
        res.json({
            ok: false,
            msg: "error al crear producto"
        })
    }
}

const getAllPortfolios = async (req, res) => {
    try {
        console.log("hola")
        const data = await getAllProducts()
        
        res.json({
            ok: true,
            data
        })
    } catch (error) {
        res.json({
            ok: false,
            msg: "error al crear producto"
        })
    }
}



async function getAll(req, res) {
    
    const limit = Number(req.query.limit) || 0;
	const sort = req.query.sort == 'desc' ? -1 : 1;

	ProductModel.find()
		.select(['-_id'])
		.limit(limit)
		.sort({ id: sort })
		.then((products) => {
			res.json(products);
		})
		.catch((err) => console.log(err));
};


async function getAllStyles(req, res) {
    ProductModel.distinct('style')
		.then((styles) => {
			res.json(styles);
		})
		.catch((err) => console.log(err));
}

async function getAllPortfoliosByStyle(req, res) {
    const style = req.params.style;
	const limit = Number(req.query.limit) || 0;
	const sort = req.query.sort == 'desc' ? -1 : 1;

	ProductModel.find({
		style,
	})
		.select(['-_id'])
        .limit(limit)
		.sort({ id: sort })
		.then((products) => {
			res.json(products);
		})
		.catch((err) => console.log(err));
};


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

module.exports = {getAll,getAllPortfolios,getAllPortfoliosByStyle,getAllStyles, getProduct,updateById,removeById,getByName,create,createStyles}