import productRepository from "../repositories/product.repository";
import { Product } from "../model/product.model";

class productsService{
      getAll(){
        return productRepository.getAll();
      }
     getByid(id: string){
       return productRepository.getById(id);
     }
     create(product: typeof Product){
        return productRepository.create(product);
     }


     update(id: string, product: Partial <typeof Product>){
        return productRepository.update(id, product);
     }

     delete(id: string){
        return productRepository.remove(id);
     }
      
}

export default new productsService();