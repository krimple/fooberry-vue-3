// graphql.js

const { ApolloServer, gql } = require("apollo-server-lambda");

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type HelloPayload {
    message: String
  }
  type Query {
    hello: HelloPayload!
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => {
      return { message: "Hello World" };
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

exports.graphqlHandler = server.createHandler();
