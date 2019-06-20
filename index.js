const express = require('express');
const path = require('path');
const generatePassword = require('password-generator');
const { GraphQLServer } = require('graphql-yoga');
const http = require('http');
// const { prisma } = require('./generated/prisma-client')


const service = express();
const serverMain = http.createServer(service);
serverMain.listen(6000);
serverMain.on('listening', function(){
  console.log(`Service Main is listning on ${serverMain.address().port} in ${service.get('env')}.mode`)
})

const typeDefs = `
type Query {
  info: String!
}
`

// 2
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`
  }
}

// 3
const server = new GraphQLServer({
  typeDefs,
  resolvers,
})

server.use(express.static(path.join(__dirname, 'client/build')));
const GRAPHQLPORT = process.env.PORT || 4000;
server.start(() => console.log(`Server is running on http://localhost:${GRAPHQLPORT}`))



const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
app.get('/api/passwords', (req, res) => {
  const count = 5;

  // Generate some passwords
  const passwords = Array.from(Array(count).keys()).map(i =>
    generatePassword(12, false)
  )

  // Return them as json
  res.json(passwords);

  console.log(`Sent ${count} passwords`);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Server is running on ${port}`);