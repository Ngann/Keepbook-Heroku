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

mutation {
  updateVendor(id: "cjsy0d79e6la00b30mq6gjb3b", name: "ngan", contact:"name") {  
     name
    }
}


mutation {
  deleteVendor(id: "cjsy06r1k5ei20b94nt2butli") {  
    id
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

mutation {
  updateCustomer(id: "cjsy0d79e6la00b30mq6gjb3b", name: "ngan", contact:"name") {  
     name
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
