import { Order, Products_list } from "../entities/Class"
import { connection } from "./connections"

export default async function insertOrder(
    order: Order,
    products_list: Products_list

) {
    await connection("orders").insert(order)
  
    await connection("products_list").insert(products_list)

} 


