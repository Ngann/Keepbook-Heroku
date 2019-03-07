function postedBy(parent, args, context) {
  return context.prisma.vendor({ id: parent.id }).postedBy()
}

module.exports = {
  postedBy,
}
