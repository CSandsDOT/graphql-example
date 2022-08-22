const express = require('express')
const { graphqlHTTP  } = require('express-graphql')
const { GraphQLSchema } = require('graphql')
const { RootQueryType, RootMutationType } = require('./schema')

const schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType
}) 
const app = express()

app.use('/graphql', graphqlHTTP ({
    schema: schema,
    graphiql: true
}))
const PORT = 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))