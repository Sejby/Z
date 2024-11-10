// mongo.ts
const mongoose = require('mongoose');
const uri = 'mongodb://root:pwd@mongo:27017/';

export default async function connectToDB() {
  await mongoose.connect(uri);
}