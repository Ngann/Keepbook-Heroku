function vendorDeleteSubscribe(parent, args, context, info) {
    return context.prisma.$subscribe.vendor({ mutation_in: ['DELETE'] }).node()
  }
  
  const vendorDelete = {
    subscribe: vendorDeleteSubscribe,
    resolve: payload => {
      return payload
    },
  }
  
  module.exports = {
    vendorDelete,
  }