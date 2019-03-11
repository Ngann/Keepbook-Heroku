function postedBy(parent, args, context) {
  return context.prisma.bill({ id: parent.id }).postedBy()
}

module.exports = {
  postedBy,
}
