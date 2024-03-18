import mongoose from "mongoose";

export const getLand = (time: string, t: any) => {
    const translation = t(time);
    return translation;
}

export const getCategory = (category: string, t: any) => {
    const translation = t(category);
    return translation;
}

export const connectToDb = async () => {
    try {
        if (!process.env.NEXT_PUBLIC_MONGO) {
            throw new Error("MongoDB connection string is not provided");
        }

        await mongoose.connect(process.env.NEXT_PUBLIC_MONGO);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
};
