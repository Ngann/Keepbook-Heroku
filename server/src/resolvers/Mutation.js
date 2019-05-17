const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')

function addVendor(parent, args, context, info) {
  const userId = getUserId(context)
  return context.prisma.createVendor({
    name: args.name,
    contact: args.contact,
    address: args.address,
    addressTwo: args.addressTwo,
    city: args.city,
    state: args.state,
    country: args.country,
    phone: args.phone,
    postedBy: { connect: { id: userId } },
  })
}

function updateVendor(parent, args, context) {
  return context.prisma.updateVendor({
    where: { id: args.id},
    data: {
      name: args.name,
      contact: args.contact,
    }
  })
}

function deleteVendor(parent, {id}, context) {
  return context.prisma.deleteVendor({
    id,
  })
}

function createCustomer(parent, args, context) {
  return context.prisma.createCustomer({
    name: args.name,
    contact: args.contact,
  })
}

function updateCustomer(parent, args, context) {
  return context.prisma.updateCustomer({
    where: { id: args.id},
    data: {
      name: args.name,
      contact: args.contact,
    }
  })
}

function deleteCustomer(parent, {id}, context) {
  return context.prisma.deleteCustomer({
    id,
  })
}

function createBill(parent, args, context) {
  const userId = getUserId(context)
  return context.prisma.createBill({
    vendor: args.vendor,
    date: args.date,
    account: args.account,
    amount: args.amount,
    postedBy: { connect: { id: userId } },
  })
}

function updateBill(parent, args, context) {
  return context.prisma.updateBill({
    where: { id: args.id},
    data: {
      vendor: args.vendor,
      date: args.date,
      account: args.account,
      amount: args.amount,
    }
  })
}

function deleteBill(parent, {id}, context) {
  return context.prisma.deleteBill({
    id,
  })
}

function createInvoice(parent, args, context) {
  return context.prisma.createInvoice({
    customer: args.customer,
    date: args.date,
    account: args.account,
    amount: args.amount,
  })
}

function updateInvoice(parent, args, context) {
  return context.prisma.updateInvoice({
    where: { id: args.id},
    data: {
      customer: args.customer,
      date: args.date,
      account: args.account,
      amount: args.amount,
    }
  })
}

function deleteInvoice(parent, {id}, context) {
  return context.prisma.deleteInvoice({
    id,
  })
}

async function signup(parent, args, context) {
  const password = await bcrypt.hash(args.password, 10)
  const user = await context.prisma.createUser({ ...args, password })

  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  return {
    token,
    user,
  }
}

async function login(parent, args, context) {
  const user = await context.prisma.user({ email: args.email })
  if (!user) {
    throw new Error('No such user found')
  }

  const valid = await bcrypt.compare(args.password, user.password)
  if (!valid) {
    throw new Error('Invalid password')
  }

  return {
    token: jwt.sign({ userId: user.id }, APP_SECRET),
    user,
  }
}

async function vote(parent, args, context) {
  const userId = getUserId(context)
  const linkExists = await context.prisma.$exists.vote({
    user: { id: userId },
    link: { id: args.linkId },
  })
  if (linkExists) {
    throw new Error(`Already voted for link: ${args.linkId}`)
  }

  return context.prisma.createVote({
    user: { connect: { id: userId } },
    link: { connect: { id: args.linkId } },
  })
}

module.exports = {
  signup,
  login,
  addVendor,
  createCustomer,
  updateCustomer,
  deleteCustomer,
  deleteVendor,
  updateVendor,
  createBill,
  updateBill,
  deleteBill,
  createInvoice,
  updateInvoice,
  deleteInvoice
}
