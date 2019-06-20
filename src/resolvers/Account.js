function postedBy(parent, args, context) {
    return context.prisma.account({ id: parent.id }).postedBy()
  }

function bills(parent, args, context) {
  return context.prisma.account({ id: parent.id }).bills()
}
  
  module.exports = {
    postedBy,
    bills,
  }