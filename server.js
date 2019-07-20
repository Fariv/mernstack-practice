import express from 'express';
import { ApolloServer } from 'apollo-server-express'
import mongoose from "mongoose";

// Construct a schema, using GraphQL schema language
import typeDefs from "./graphql/schema";
 
// Provide resolver functions for your schema fields
import resolvers from "./graphql/resolvers";

mongoose.connect('mongodb://localhost:27017/graphqltut', {useNewUrlParser: true});
const connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', () => {
  console.log( 'Connection to database was succesful' );
});

const server = new ApolloServer({ typeDefs, resolvers });
 
const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);