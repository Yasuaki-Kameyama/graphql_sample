const {gql} = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: Int
    name: String
    age: Int
    created_date: String
  }
  type TableHeader {
    id: ID
    name: String
    description: String
  }
  type Query {
    users: [User]
    tableHeaders: [TableHeader]
    getTableHeader(id: ID!): TableHeader
  }
`;

module.exports = typeDefs;