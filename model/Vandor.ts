import mongoose, { Document, Schema, Model } from 'mongoose';

interface VandorDoc extends Document {
    name: String,
    ownerName: String,
    foodType: [String],
    pincode: String,
    address: String,
    phone: String,
    email: String,
    password: String,
    salt: String,
    serviceAvailable: Boolean,
    coverImages: [String],
    rating: String,
    // food: any
}

const VandorSchema = new Schema({
    name: { type: String },
    ownerName: { type: String },
    foodType: { type: [String] },
    pincode: { type: String },
    address: { type: String },
    phone: { type: String },
    email: { type: String },
    password: { type: String },
    salt: { type: String },
    serviceAvailable: { type: Boolean },
    coverImages: { type: [String] },
    rating: { type: String },
    // food: [{
    //     type: mongoose.Schema.ObjectId,
    //     ref: "food"
    // }]
},
    {
        toJSON:{
            transform(doc,ret){
                delete ret.createdAt;
                delete ret.updatedAt;
                delete ret.__v;
                delete ret.salt;
                delete ret.password;
            }
        },
        timestamps: true
    }
);

const Vandor = mongoose.model<VandorDoc>('vandor', VandorSchema);

export { Vandor }