import mongoose from "mongoose";

const uri = "mongodb://root:pwd@mongo:27017/";

let instance: mongoose.Mongoose | null = null;

export default async function connectToDB(): Promise<mongoose.Mongoose> {
  if (!instance) {
    instance = await mongoose.connect(uri);
  }
  return instance;
}
