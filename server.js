let express = require('express');
let graphqlHTTP = require('express-graphql');
let { buildSchema } = require('graphql');

let schema = buildSchema(`
  type Query {
    hello: String
  }
`);

let root = {
  hello: () => 'hello world'
};

let app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphql: true
}))

app.listen(4000, () => console.log('Server running on localhost:4000'))