import product from "../models/producto.js";

const registerProducto = async (req, res)=>{
  console.log(req.body.name);
    if(!req.body.name || !req.body.description){
      return  res.status(400).send("Imcomplete data");
    }

    const existingProducto=await product.findOne({name:req.body.name });


    if(existingProducto) return res.status(400).send("The producto already exist");

    const productSchema = new product({
        name: req.body.name,
        price: req.body.preci,
        stock:req.body.stock,
        descriptiion:  req.body.description,  
        dbStatus: true,

    });

    const result= await productSchema.save();
    if(!result) return res.status(400).send("failed register");
    return res.status(200).send({result});
};

export default{registerProducto};