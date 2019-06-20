function postedBy(parent, args, context) {
  return context.prisma.vendor({ id: parent.id }).postedBy()
}

function bills(parent, args, context) {
  return context.prisma.vendor({ id: parent.id }).bills()
}
module.exports = {
  postedBy,
  bills,
}
