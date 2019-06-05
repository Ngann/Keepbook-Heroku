function postedBy(parent, args, context) {
  return context.prisma.bill({ id: parent.id }).postedBy()
}

function vendorId(parent, args, context){
  return context.prisma.bill({id: parent.id}).vendorId()
}

module.exports = {
  postedBy,
  vendorId,
}
