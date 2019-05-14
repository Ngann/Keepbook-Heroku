function newVendorSubscribe(parent, args, context, info) {
    return context.prisma.$subscribe.vendor({ mutation_in:['CREATED', 'UPDATED', 'DELETED']}).node()
}

const newVendor = {
    subscribe: newVendorSubscribe,
    resolve: payload => {
        return payload
    }
}

module.exports = {
    newVendor,
}