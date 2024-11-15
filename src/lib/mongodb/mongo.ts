"use server";

import mongoose from "mongoose";

//const uri = "mongodb://root:pwd@localhost:27017/";

let instance: mongoose.Mongoose | null = null;

export default async function connectToDB(): Promise<mongoose.Mongoose> {
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not set");
  }

  if (!instance) {
    instance = await mongoose.connect(process.env.MONGO_URI);
  }

  return instance;
}
