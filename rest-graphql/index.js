
import {ApolloServer} from "apollo-server"
import { importSchema } from "graphql-import";
import NFTDataSource from "./datasource/nftDatasource.js";
import dotenv from "dotenv"

const typeDefs = importSchema("./schema.graphql")

dotenv.config("/.env")


const resolvers = {
    Query: {
     nftsByContract: (root, _args, { dataSources }) =>
     dataSources.nftDatasource.nftsByContract(),
     nftsTransfersByContract: (root, _args, { dataSources }) =>
     dataSources.nftDatasource.nftsTransfersByContract(),
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
     nftDatasource: new NFTDataSource(),
     
    }),
});
   
server.timeout = 0;
server.listen("9000").then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});