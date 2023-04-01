import { Router } from 'express';
import activity from './activity_one';
import products from './product';



const router = Router();

router.use('/api', activity);

router.use('/products', products);





export default router;