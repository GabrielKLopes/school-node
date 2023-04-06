import { Product } from "../model/product.model";

class ProductRepository{
    getAll(){
        return Product.find();
    }

    getById(id: string){
        return Product.findOne({_id: id})
    }
    create(product: typeof Product){
        return Product.create(product);
    }
    update(id: string, product: Partial <typeof Product>){
        return Product.updateOne({_id: id, product: Product}, {$set: product});
    }

    remove(id: string){
        return Product.deleteOne({_id: id}, {remove: true});

    }
}

export default new ProductRepository