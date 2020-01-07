const express = require("express");
const expressGraphql = require("express-graphql");
const {
  GraphQLSchema,
  GraphQLInputObjectType,
  GraphQLString
} = require("graphql");
const app = express();

const schema = new GraphQLSchema({
  query: new GraphQLInputObjectType({
    name: `HelloWorld`,
    fields: () => ({
      message: {
        type: GraphQLString,
        resolve: () => `Hello world`
      }
    })
  })
});

app.use(
  "/graphql",
  expressGraphql({
    schema,
    graphiql: true
  })
);
app.listen(5000, () => console.log("listening to port 5000"));
