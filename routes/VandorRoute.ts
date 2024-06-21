import express, { Request, Response, NextFunction} from 'express';

const router = express.Router();

router.get('/',(req:Request, res:Response, next:NextFunction)=>{
    res.json({msg:"From The Vandor"})
})

export {router as VandorRoute}