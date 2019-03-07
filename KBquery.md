Add Vendor:

mutation {
  addVendor(
    name: "Second Vendor"
    contact: "777-777-777"
  ) {
    id
  }
}

query {
  vendors {
    id
    name
    contact
    createdAt
  }
}

Add Customer:

mutation {
  createCustomer(
    name: "First Customer"
    contact: "777-777-777"
  ) {
    id
  }
}

mutation {
  deleteCustomer(id: "cjsy06r1k5ei20b94nt2butli") {  
    id
  }
}

---------
query {
  vendorsList {
    id
    name
    contact
  }
}


mutation {
  addVendor(
    name: "Second Vendor"
    contact: "777-777-777"
  ) {
    id
  }
}

mutation {
  addCustomer(
    name: "Third Customer"
    contact: "777-777-777"
  ) {
    id
  }
}


  mutation {
  addBill(
    vendor: "one"
    date: "two"
    account: "three"
    amount: 100
  ) {
    id
  }
}

mutation {
  addInvoice(
    customer: "one"
    date: "two"
    account: "three"
    amount: 100
  ) {
    id
  }
}

query {
  billList {
    vendor
    amount
    id
    }
  }

query {
  vendor(id:"vendor-0")
  { id
    name
    contact
  }
}


query {
  user(id: "user-1") {
    id
    name
  }
}
