const express = require('express');

const { ApolloServer} = require('apollo-server-express');
const typeDefs = require('./models/schema');
const resolvers = require('./models/resolvers')

const table_header = require('./models/table_header');



const server = new ApolloServer({ typeDefs, resolvers, context: {TableHeader: table_header}});

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);