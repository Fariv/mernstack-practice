import { gql } from "apollo-server-express";

const schema = gql`
  type Author {
      id: ID
      name: String
      age: Int
      gender: String
      books: [String]
  }  
  type Query {
    authors: [Author]
    author(id: ID): Author
  }
  type Mutation {
      addAuthor(name: String!, age: Int!, gender: String!, books: [String]!) : Author
      deleteAuthor(id: ID): Author
  }
`;

export default schema;