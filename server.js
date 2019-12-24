const express = require('express');

const { ApolloServer, gql } = require('apollo-server-express');
const { users } = require('./users');

const sqlite3 = require('sqlite3');
const database = new sqlite3.Database('./testdb.sqlite3');

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
const getTable = async () => {
  const sql = 'SELECT id, name, description FROM table_header';
  database.serialize(() => {
    database.all(sql, (err, rows) => {
        return rows;
      });
  });
}
const aaa= () => {
  return [{id:1, name:'a', description:'q'}, {id:3, name:'b', description:'w'}, {id:2, name:'c', description:'s'}];
}



// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    users: () => users,
    tableHeaders: () => getTable
  },
};





const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);