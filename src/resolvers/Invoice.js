function postedBy(parent, args, context) {
  return context.prisma.invoice({ id: parent.id }).postedBy()
}

module.exports = {
  postedBy,
}
