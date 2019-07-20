import mongoose from 'mongoose';
import authorModel from "./models/author";

const resolvers = {
    Query: {
        authors: () => null,
        author: (root, args) => null
    },
    Mutation: {
        addAuthor: ( root, {name, age, gender, books} ) => {
            const author = new authorModel({name, age, gender, books});
            return author.save();
        },
        deleteAuthor: ( root, {id} ) => {
            return authorModel.findOneAndDelete({ '_id': mongoose.Types.ObjectId(id) });
        }
    }
};

export default resolvers;