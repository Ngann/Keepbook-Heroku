function postedBy(parent, args, context) {
  return context.prisma.customer({ id: parent.id }).postedBy()
}

module.exports = {
  postedBy,
}
