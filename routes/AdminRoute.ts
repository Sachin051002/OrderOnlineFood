import express, { Request, Response, NextFunction, response} from 'express';
import { CreateVandor, GetVandorById, GetVandors } from '../controllers';

const router = express.Router();



router.post('/CreateVandor', CreateVandor);
router.get('/GetVandors', GetVandors);
router.get('/GetVandorById/:id', GetVandorById);

router.get('/',(req:Request, res:Response, next:NextFunction)=>{
    res.json({msg:"From The Admin"})
})

export {router as AdminRoute}