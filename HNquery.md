Sign up new user:

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
      links {
        url
        description
      }
    }
  }
}


Post:

mutation {
  post(
    url: "www.graphqlconf.org"
    description: "An awesome GraphQL conference"
  ) {
    id
  }
}

mutation {
  post(
    url: "www.ngannn.org"
    description: "Ngannn"
  ) {
    id
  }
}

Subscription:

subscription {
  newLink {
      id
      url
      description
      postedBy {
        id
        name
        email
      }
  }
}


subscription {
  newVote {
    id
    link {
      url
      description
    }
    user {
      name
      email
    }
  }
}
