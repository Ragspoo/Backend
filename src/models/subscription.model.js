import mongoose, {Schema} from "mongoose";

const subscriptionSchema = new Schema({
    subscriber:{
        type:Schema.Types.ObjectId,// for subscriber
        ref:"User"
    },
    Channel:{
        type: Schema.Types.ObjectId,// to whom 'subscriber' is subscribing
        ref:"User"
    }
},{timestamps:true});

export const subscription = mongoose.model("Subscription", subscriptionSchema);