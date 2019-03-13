Signup:

mutation {
  signup(
    name: "Alice"
    email: "alice@prisma.io"
    password: "graphql"
  ) {
    token
    user {
      id
    }
  }
}

Token:

{
  "Authorization": "Bearer __TOKEN__"
}

Login user:

mutation {
  login(
    email: "alice@prisma.io"
    password: "graphql"
  ) {
    token
    user {
      email
    }
  }
}


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
Bills:

mutation {
  createBill(
    vendor: "one"
    date: "two"
    account: "three"
    amount: 100
  ) {
    id
    account
  }
}

mutation {
updateBill(id:"cjt4xnne31loo0b80derylbeb", vendor: "Adobe", date: "12/24/2009", account: "Office Supplies", amount: 400
) {
  id
  account
}
}

mutation {
  deleteBill(id: "cjt4y8htb1p4i0b80fbegmbs2") {  
    id
    amount
  }
}

query {
  bills {
    vendor
    account
    amount
    id
    }
  }


  query {
    searchBills(filter: "Adobe") {
      bills {
        id
        vendor
        date
        account
        amount
        postedBy {
          id
          name
        }
      }
    }
  }


Invoices:

mutation {
createInvoice(
  customer: "one"
  date: "two"
  account: "three"
  amount: 100
) {
  id
  account
}
}

query {
  invoices {
    customer
    account
    amount
    id
    date
    }
  }

mutation {
  deleteInvoice(id: "cjt4zr93e298k0b64dy7z9upa") {  
    id
    amount
    date
  }
}

mutation {
updateInvoice(id:"cjt4zts521yea0b805c85bzuq", customer: "Adobe", date: "12/24/2009", account: "Sales", amount: 400
) {
  id
  account
}
}



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
createBill(
  vendor: "one"
  date: "two"
  account: "three"
  amount: 100
) {
  id
  account
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
