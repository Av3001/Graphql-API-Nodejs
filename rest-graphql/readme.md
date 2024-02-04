# Rest-api-graphql

## Introduction
Building a GraphQL API using the Moralis NFT REST API endpoints.
Sign-up to Moralis and get your Api and paste it into .env file 
### Setup
 - cd rest-graphql
 - nvm install 16.16.0 
 - nvm use 16.16.0   
 - npm install
 - npm run start


### After running the above command, head to localhost:9000 and click on “Query your server” to be navigated to the GraphQL playground.

Under the GraphQL playground, create a new workspace space to execute your queries. 

query {
 nftsByContract {
  result {
   name
   metadata
  }
 }
 nftsTransfersByContract {
  result {
   transaction_hash
  }
 }
}

click on “Run” to execute the queries and you should see that the query has been executed successfully with a status code of 200 and it returns 10 rows of results for the two queries. 