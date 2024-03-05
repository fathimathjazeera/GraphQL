const express = require('express')
const {ApolloServer}= require('apollo-server-express')
const { resolvers} = require('./resolvers/index')
const {typeDefs} = require('./models/typeDefs')
const app= express()



const server = new ApolloServer({resolvers, typeDefs})
server.start().then((res)=>{
    server.applyMiddleware({app})
    app.listen({port: 8000},()=> {
    console.log(`Graphql is running at PORT ${8000}/graphql`)
    })
})

