const express = require('express');

const { ApolloServer, gql } = require('apollo-server-express');
const { users } = require('./users');

const database = require('./models/index')
const table_header = require('./models/table_header');

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type User {
    id: Int
    name: String
    age: Int
    created_date: String
  }
  type TableHeader {
    id: String
    name: String
    description: String
  }
  type Query {
    users: [User]
    tableHeaders: TableHeader
  }
`;



// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    tableHeaders: async (parent, args, {TableHeader}) => {TableHeader.findAll();},
  },
};





const server = new ApolloServer({ typeDefs, resolvers, context: {TableHeader: table_header}});

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);