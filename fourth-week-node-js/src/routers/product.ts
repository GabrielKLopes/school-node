import { Request, Response, Router } from "express";
import productsService from "../services/products.service";

const router = Router();



router.get("/", (req, res) => {
    const products = productsService.getAll();
    res.send(products)

});

router.get("/:id", (req, res) => {
    const id  = parseInt (req.params.id);
    const product = productsService.getByid(id);
    return res.send(product);
})

router.post("/", (req, res) => {
    productsService.create(req.body)
    return res.status(200).send({message: "successfully registered product"})
});

router.put("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    try{
      productsService.update(id, req.body)
      res.status(200).send({message:"successfully updated product"})
    }catch(error){
      res.status(400).send(error);
    }
    
});

router.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    try{
      productsService.delete(id)
      res.status(200).send({message:"successfully deleted product"})
    }catch(error: any){
      res.status(400).send({message: error.message});
    }
    
})
export default router;
