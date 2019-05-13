Add new table:
schema.graphql  , add to datamodel.prisma, create new schema resolver, add to index.js, update resolver.


Update Prisma Endpoint: Make sure both endpoints match
./src/generated/prisma-client/index.js
change endpoint here...

./server/prisma/prisma.yml
change endpoint here...

`prisma generate` to create database schema 
`yarn start` to connect to UI