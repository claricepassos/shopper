import { product } from "../entities/Class";
import { connection } from "./connections"
 

export default async function findProducts() {
    const result = await connection
      .select("*")
      .from('Products')
    return result[0];
   }
 
