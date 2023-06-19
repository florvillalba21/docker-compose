
import Router from 'express';
import { deleteProduct, editProduct, getProducts, newProduct } from '../controllers/product.controller.js';

export const productRouter = Router();
//Rutas de los productos

productRouter.get("/getProducts", getProducts )

productRouter.post("/newProduct", newProduct)

productRouter.put("/editProduct/:id", editProduct)

productRouter.delete("/deleteProduct/:id", deleteProduct)



