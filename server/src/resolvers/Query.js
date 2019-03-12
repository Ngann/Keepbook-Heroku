async function feed(parent, args, context) {
  const count = await context.prisma
    .linksConnection({
      where: {
        OR: [
          { description_contains: args.filter },
          { url_contains: args.filter },
        ],
      },
    })
    .aggregate()
    .count()
  const links = await context.prisma.links({
    where: {
      OR: [
        { description_contains: args.filter },
        { url_contains: args.filter },
      ],
    },
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy,
  })
  return {
    count,
    links,
  }
}


function vendors(parent, args, context, info) {
  return context.prisma.vendors()
}

function customers(parent, args, context, info) {
  return context.prisma.customers()
}

function bfeed(parent, args, ctx, info) {
      return ctx.db.query.posts({ where: { isPublished: true } }, info)
    }

function drafts(parent, args, ctx, info) {
      return ctx.db.query.posts({ where: { isPublished: false } }, info)
    }

function post(parent, { id }, ctx, info) {
      return ctx.db.query.post({ where: { id: id } }, info)
    }

function bills(parent, args, context, info) {
  return context.prisma.bills()
}

function invoices(parent, args, context, info) {
  return context.prisma.invoices()
}

async function searchBills(parent, args, context) {
  const count = await context.prisma
    .billsConnection({
      where: {
        OR: [
          { vendor_contains: args.filter },
          { account_contains: args.filter },
        ],
      },
    })
    .aggregate()
    .count()
  const bills = await context.prisma.bills({
    where: {
      OR: [
        { vendor_contains: args.filter },
        { account_contains: args.filter },
      ],
    },
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy,
  })
  return {
    count,
    bills,
  }
}

async function searchInvoices(parent, args, context) {
  const count = await context.prisma
    .invoicesConnection({
      where: {
        OR: [
          { customer_contains: args.filter },
          { account_contains: args.filter },
        ],
      },
    })
    .aggregate()
    .count()
  const invoices = await context.prisma.invoices({
    where: {
      OR: [
        { customer_contains: args.filter },
        { account_contains: args.filter },
      ],
    },
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy,
  })
  return {
    count,
    invoices,
  }
}

module.exports = {
  feed,
  vendors,
  customers,
  bfeed,
  drafts,
  post,
  bills,
  invoices,
  searchBills,
  searchInvoices
}
