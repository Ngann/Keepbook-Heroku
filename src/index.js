const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const Subscription = require('./resolvers/Subscription')
const User = require('./resolvers/User')
const Vendor = require('./resolvers/Vendor')
const Customer = require('./resolvers/Customer')
const Bill = require('./resolvers/Bill')
const Invoice = require('./resolvers/Invoice')
const Account = require('./resolvers/Account')

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
server.start(() => console.log(`Server is running on http://localhost:4000`))
