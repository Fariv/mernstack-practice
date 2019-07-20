import mongoose from "mongoose";

const schema = mongoose.Schema;

const authorSchema = new schema({
    name: String,
    age: Number,
    gender: String,
    books: [String]
});

const model = mongoose.model('author', authorSchema);

export default model;