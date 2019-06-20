const express = require('express');
const path = require('path');
const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./src/generated/prisma-client')
const Query = require('./src/resolvers/Query')
const Mutation = require('./src/resolvers/Mutation')
const Subscription = require('./src/resolvers/Subscription')
const User = require('./src/resolvers/User')
const Vendor = require('./src/resolvers/Vendor')
const Customer = require('./src/resolvers/Customer')
const Bill = require('./src/resolvers/Bill')
const Invoice = require('./src/resolvers/Invoice')
const Account = require('./src/resolvers/Account')

const resolvers = {
  Query,
  Mutation,
  Subscription,
  User,
  Vendor,
  Customer,
  Bill,
  Invoice,
  Account,
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: request => ({
    ...request,
    prisma,
  }),
})

server.use(express.static(path.join(__dirname, 'client/build')));

const port = process.env.PORT || 4000;
server.start(() => console.log(`Server is running on http://localhost:${port}`))
