const express = require('express')
const cors = require('cors')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')

const app = express()

app.use(cors())

app.use(
  '/',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
)

app.listen(8080)