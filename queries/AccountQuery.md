query {
  accounts {
    id
    name
    postedBy {
      name
    }
  } 
}

mutation {
createAccount(
  name: "Payable"
  number: "1000"
) {
  name
  number
  postedBy {
    name
  }
}
}

mutation {
  deleteAccount(id:"cjvvcwp3j0wpb0b22p8xhkj8z") {  
    id
  }
}

mutation {
  updateAccount(id: "cjvvcyf96jblw0b95sgjqr80e", name: "Expense", number:"2000") {  
     name
    }
}


