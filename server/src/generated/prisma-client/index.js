"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Vendor",
    embedded: false
  },
  {
    name: "Customer",
    embedded: false
  },
  {
    name: "Bill",
    embedded: false
  },
  {
    name: "Invoice",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://eu1.prisma.sh/ngan-nguyen-13344c/server/dev`
});
exports.prisma = new exports.Prisma();
