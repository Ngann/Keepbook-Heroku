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

response:
{
  "data": {
    "signup": {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjang1aGV5czRsMjFyMGIxMnljYjV2MjlhIiwiaWF0IjoxNTYxMDg0NTE3fQ.NKjhXTfUFs1jwuNDXdefmovJMDh9l3pxwjszJ-86dio",
      "user": {
        "id": "cjx5heys4l21r0b12ycb5v29a"
      }
    }
  }
}

Token:

{
  "Authorization": "Bearer __TOKEN__"
}


Vendor:

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

response:
{
  "data": {
    "addVendor": {
      "id": "cjx5hipwn4nvb0b42b4oc0dkv",
      "name": "New Vendor",
      "contact": "777-777-777",
      "address": "test",
      "addressTwo": "test agin",
      "city": "test",
      "state": "test",
      "country": "test"
    }
  }
}

query {
  vendors{
    name
    id
    bills{
      accountId{
        name
      }
      amount
      date
      vendorId{
        name
      }
    }
  }
}

{
  "data": {
    "vendors": [
      {
        "name": "New Vendor",
        "id": "cjx5hipwn4nvb0b42b4oc0dkv",
        "bills": []
      },
      {
        "name": "New Vendor",
        "id": "cjx5hjcvtl2dm0b12dtjbw1a1",
        "bills": []
      }
    ]
  }
}

mutation {
createAccount(
  name: "SOMETHING"
  number: "3000"
  accountType: Debit
  accountCategory: Assets
) {
  id
  name
  number
  accountType
  accountCategory
  postedBy {
    name
  }
}
}
{
  "data": {
    "createAccount": {
      "id": "cjx5lyaz1lfn90b12h3qs8d1a",
      "name": "SOMETHING",
      "number": "3000",
      "accountType": "Debit",
      "accountCategory": "Assets",
      "postedBy": {
        "name": "Alice"
      }
    }
  }
}


Bills:
mutation {
  createBill(
     vendor: "cjx5hipwn4nvb0b42b4oc0dkv"
     date: "sdfdf"
     account: "cjx5hroa1l2yh0b12ml2yawwi"
     amount: 100
  ){
    id
    date
    amount
    vendorId{
      name
    }
    accountId{
      name
    }
  }
}

{
  "data": {
    "createBill": {
      "id": "cjx5hseiel30p0b1267458bjz",
      "date": "sdfdf",
      "amount": 100,
      "vendorId": {
        "name": "New Vendor"
      },
      "accountId": {
        "name": "Receivable"
      }
    }
  }
}