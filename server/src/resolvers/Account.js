function postedBy(parent, args, context) {
    return context.prisma.account({ id: parent.id }).postedBy()
  }
  
  module.exports = {
    postedBy,
  }