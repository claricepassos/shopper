import { Client_Order, Order } from "../entities/Class"
import { connection } from "./connections"

export default async function insertOrder(
    client_order: Client_Order,
    order: Order

) {
    await connection("orders").insert(order)
  
    await connection("client_order").insert(client_order)

} 


