import { Request, Response, Router } from "express";
import productsService from "../services/products.service";

const router = Router();



router.get("/", async (req, res) => {
    const products =  await productsService.getAll();
    res.send(products)

});

router.get("/:id",  async (req, res) => {
    const id  = req.params.id;
    const product = await productsService.getByid(id);
    return res.send(product);
})

router.post("/", async (req, res) => {
    await productsService.create(req.body)
    return res.status(200).send({message: "successfully registered product"})
});

router.put("/:id",  async (req, res) => {
    const id = req.params.id;
    try{
     await productsService.update(id, req.body)
      res.status(200).send({message:"successfully updated product"})
    }catch(error){
      res.status(400).send(error);
    }
    
});

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    try{
      await productsService.delete(id)
      res.status(200).send({message:"successfully deleted product"})
    }catch(error: any){
      res.status(400).send({message: error.message});
    }
    
})
export default router;
