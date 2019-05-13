query {
  vendors {
    id
    name
    contact
    address
    createdAt
    postedBy {
      name
    }
  }
}

mutation {
  addVendor(
    name: "New Vendor"
    contact: "777-777-777"
    address: "test"
    addressTwo: "test agin"
    city: "test"
    state: "test"
    country: "test"
    # phone: "test"
  ) {
    id
    name
    contact
    address
    addressTwo
    city
    state
    country
    # phone
  }
}