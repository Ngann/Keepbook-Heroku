const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')

function post(parent, args, context) {
  return context.prisma.createLink({
    url: args.url,
    description: args.description,
  })
}

function addVendor(parent, args, context) {
  return context.prisma.createVendor({
    name: args.name,
    contact: args.contact,
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
  return context.prisma.createBill({
    vendor: args.vendor,
    date: args.date,
    account: args.account,
    amount: args.amount,
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


function createDraft(parent, { title, text }, ctx, info) {
  return ctx.db.mutation.createPost(
    { data: { title, text, isPublished: false } },
    info,
  )
}

function deletePost(parent, { id }, ctx, info) {
  return ctx.db.mutation.deletePost({where: { id } }, info)
}

function publish(parent, { id }, ctx, info) {
  return ctx.db.mutation.updatePost(
    {
      where: { id },
      data: { isPublished: true },
    },
    info,
  )
}

module.exports = {
  post,
  signup,
  login,
  vote,
  addVendor,
  createCustomer,
  updateCustomer,
  deleteCustomer,
  deleteVendor,
  updateVendor,
  createDraft,
  deletePost,
  publish,
  createBill,
  updateBill,
  deleteBill,
  createInvoice,
  updateInvoice,
  deleteInvoice
}
