import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import { AdminRoute,VandorRoute } from './routes';
import { Mongo_Url } from './config';

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect(Mongo_Url).then(
    res=>{console.log('Connection established.')},
    err =>{console.log("Error is ",err)}
);

app.use('/admin',AdminRoute)
app.use('/vandor',VandorRoute)


app.listen(8000,()=>{
    console.log('Server is running.')
})