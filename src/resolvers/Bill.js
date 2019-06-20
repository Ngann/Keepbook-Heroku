function postedBy(parent, args, context) {
  return context.prisma.bill({ id: parent.id }).postedBy()
}

function vendorId(parent, args, context){
  return context.prisma.bill({id: parent.id}).vendorId()
}

function accountId(parent, args, context){
  return context.prisma.bill({id: parent.id}).accountId()
}

module.exports = {
  postedBy,
  vendorId,
  accountId,
}
