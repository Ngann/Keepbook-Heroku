function vendors(parent, args, context) {
  return context.prisma.user({ id: parent.id }).vendors()
}

module.exports = {
  vendors,
}
