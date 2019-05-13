Recreating the vendor component to add addition fields.

1. Create a newVendor branch
2. Remove prisma endpoint, redeployed prisma server and database
   * Update Prisma Endpoint: Make sure both endpoints match
        ./src/generated/prisma-client/index.js
        change endpoint here...

    * ./server/prisma/prisma.yml
        change endpoint here...

`prisma deploy` to set up new prisma server and database

`yarn start` to start server on local machine

```
ngans-mbp:server ngan$ prisma deploy
? Set up a new Prisma server or deploy to an existing server? Use existing datab
ase
? What kind of database do you want to deploy to? MySQL
? Does your database contain existing data? Yes
? Enter database host localhost
? Enter database port 4000
? Enter database user 
? Enter database password [hidden]
 ▸    'ECONNREFUSED': connect ECONNREFUSED 127.0.0.1:4000

Get in touch if you need help: https://spectrum.chat/prisma
To get more detailed output, run $ export DEBUG="*"
ngans-mbp:server ngan$ prisma deploy
? Set up a new Prisma server or deploy to an existing server? Demo server + MySQ
L database
Opening https://app.prisma.io/cli-auth?secret=$2a$08$Uxiwk1QoMbgx4rhvmAL/B. in the browser

Authenticating ✔
Authenticated with ngann.dev@gmail.com
? Choose the region of your demo server ngan-nguyen-13344c/demo-us1
? Choose a name for your service vendor
? Choose a name for your stage dev

Written endpoint `https://us1.prisma.sh/ngan-nguyen-13344c/vendor/dev` to prisma.yml

Creating stage dev for service vendor ✔
Deploying service `vendor` to stage `dev` to server `prisma-us1` 1.0s

Errors:

  User
    ✖ One field of the type `User` must be marked as the id field with the `@id` directive.

  Vendor
    ✖ One field of the type `Vendor` must be marked as the id field with the `@id` directive.

  Customer
    ✖ One field of the type `Customer` must be marked as the id field with the `@id` directive.

  Bill
    ✖ One field of the type `Bill` must be marked as the id field with the `@id` directive.

  Invoice
    ✖ One field of the type `Invoice` must be marked as the id field with the `@id` directive.

Deployment canceled. Please fix the above errors to continue deploying.
Read more about deployment errors here: https://bit.ly/prisma-force-flag
ngans-mbp:server ngan$ prisma deploy
Warning: Your Prisma server and Prisma CLI are currently out of sync. They should be on the same minor version.
  
Prisma CLI version: prisma/1.32.2 (darwin-x64) node-v11.13.0
Prisma server version: 1.32.0-beta
  
For further information, please read: http://bit.ly/prisma-cli-server-sync
  
Deploying service `vendor` to stage `dev` to server `prisma-us1` 372ms

Warnings:

  Vendor
    ! You are adding the field `createdAt` but is missing the directive `@createdAt`. Please specify the field as `createdAt: DateTime! @createdAt` if you want to track the times for when a record was created. Or deploy with `--force` to ignore this.

  Customer
    ! You are adding the field `createdAt` but is missing the directive `@createdAt`. Please specify the field as `createdAt: DateTime! @createdAt` if you want to track the times for when a record was created. Or deploy with `--force` to ignore this.

If you want to ignore the warnings, please deploy with the --force flag: $ prisma deploy --force
Read more about deployment warnings here: https://bit.ly/prisma-force-flag
ngans-mbp:server ngan$ prisma deploy
Warning: Your Prisma server and Prisma CLI are currently out of sync. They should be on the same minor version.
  
Prisma CLI version: prisma/1.32.2 (darwin-x64) node-v11.13.0
Prisma server version: 1.32.0-beta
  
For further information, please read: http://bit.ly/prisma-cli-server-sync
  
Deploying service `vendor` to stage `dev` to server `prisma-us1` 394ms

Changes:

  Vendor (Type)
  + Created type `Vendor`
  + Created field `id` of type `ID!`
  + Created field `createdAt` of type `DateTime!`
  + Created field `name` of type `String!`
  + Created field `contact` of type `String!`
  + Created field `postedBy` of type `User`

  Customer (Type)
  + Created type `Customer`
  + Created field `id` of type `ID!`
  + Created field `createdAt` of type `DateTime!`
  + Created field `name` of type `String!`
  + Created field `contact` of type `String!`
  + Created field `postedBy` of type `User`

  Bill (Type)
  + Created type `Bill`
  + Created field `id` of type `ID!`
  + Created field `vendor` of type `String!`
  + Created field `date` of type `String!`
  + Created field `account` of type `String!`
  + Created field `amount` of type `Int!`
  + Created field `postedBy` of type `User`

  Invoice (Type)
  + Created type `Invoice`
  + Created field `id` of type `ID!`
  + Created field `customer` of type `String!`
  + Created field `date` of type `String!`
  + Created field `account` of type `String!`
  + Created field `amount` of type `Int!`
  + Created field `postedBy` of type `User`

  User (Type)
  + Created type `User`
  + Created field `id` of type `ID!`
  + Created field `name` of type `String!`
  + Created field `email` of type `String!`
  + Created field `password` of type `String!`
  + Created field `vendors` of type `[Vendor!]!`
  + Created field `customers` of type `[Customer!]!`

  InvoiceToUser (Relation)
  + Created an inline relation between `Invoice` and `User` in the column `postedBy` of table `Invoice`

  CustomerToUser (Relation)
  + Created an inline relation between `Customer` and `User` in the column `postedBy` of table `Customer`

  BillToUser (Relation)
  + Created an inline relation between `Bill` and `User` in the column `postedBy` of table `Bill`

  UserToVendor (Relation)
  + Created an inline relation between `User` and `Vendor` in the column `postedBy` of table `Vendor`

Applying changes 3.4s

post-deploy:

Generating schema... 34ms
Saving Prisma Client (JavaScript) at /Users/ngan/Desktop/KBDSFS/server/src/generated/prisma-client

Running prisma generate ✔
Warning: The `prisma generate` command was executed twice. Since Prisma 1.31, the Prisma client is generated automatically after running `prisma deploy`. It is not necessary to generate it via a `post-deploy` hook any more, you can therefore remove the hook if you do not need it otherwise.
Generating schema 35ms
Saving Prisma Client (JavaScript) at /Users/ngan/Desktop/KBDSFS/server/src/generated/prisma-client

Your Prisma endpoint is live:

  HTTP:  https://us1.prisma.sh/ngan-nguyen-13344c/vendor/dev
  WS:    wss://us1.prisma.sh/ngan-nguyen-13344c/vendor/dev

You can view & edit your data here:

  Prisma Admin: https://us1.prisma.sh/ngan-nguyen-13344c/vendor/dev/_admin

ngans-mbp:server ngan$ 
```