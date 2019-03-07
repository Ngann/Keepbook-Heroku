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

module.exports = {
  feed,
  vendors,
  customers,
  bfeed,
  drafts,
  post
}
