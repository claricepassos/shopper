import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net"
import knex from "knex";
import getProducts from './endpoints/getProducts';
import postOrder from './endpoints/postOrder';

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get ('/products', getProducts)
app.post ('/products', postOrder)



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

