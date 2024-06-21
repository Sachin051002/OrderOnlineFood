import { Request, Response, NextFunction } from "express";
import { CreateVandorInput } from "../dto";
import { Vandor } from "../model";
import { GenerateHash, GenerateSalt } from "../utility";


export const FindVandor = async (id:string|undefined, email?:string)=>{
    if(email){
        return await Vandor.findOne({email:email})
    }
    else if(id){
        return await Vandor.findById(id);
    }
    else{
        return await Vandor.find();
    }

}


export const CreateVandor = async (req: Request, res: Response, next: NextFunction) => {
    const { name, ownerName, foodType, pincode, address, phone, email, password } = <CreateVandorInput>req.body;

    const ExistingVandor = await FindVandor("",email)

    if(ExistingVandor !== null){
        return res.json({message:"Vandor with this Email already exist."})
    }

    const Salt = await GenerateSalt();
    const Hash = await GenerateHash(password,Salt);

    const CreatedVandor = await Vandor.create({
        name : name,
        ownerName : ownerName,
        foodType: foodType,
        pincode: pincode,
        address:address,
        phone:phone,
        email:email,
        salt:Salt,
        password:Hash,
        serviceAvailable:false,
        coverImages:[],
        rating:0,
    })
    res.json({CreatedVandor})
}

export const GetVandors = async (req: Request, res: Response, next: NextFunction) => {
    const vandor = await FindVandor(undefined);

    
    if(vandor !== null){
        return res.json(vandor);
    }
    res.json({message:"No Data Found."})
}

export const GetVandorById = async (req: Request, res: Response, next: NextFunction) => {
    const vandorId = req.params.id;
    console.log(vandorId)
    const vandor = await FindVandor(vandorId);

    if(vandor !== null){
        return res.json(vandor);
    }
    res.json({message:"No Data Found."})
}