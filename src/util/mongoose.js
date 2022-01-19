export const multipleMongooseToObject = (mongooses) =>
  mongooses.map((mongoose) => mongoose.toObject());

export const MongooseToObject = (mongoose) => mongoose.toObject();
