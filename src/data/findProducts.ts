import { Product } from "../entities/Class";
import { connection } from "./connections"
 

export default async function findProducts() {
    const result = await connection
      .where('qty_stock', '>', '0')
      .from('Products')
    return result;
   }
 
