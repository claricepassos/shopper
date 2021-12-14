import { Client_Order, Order } from "../entities/Class"
import { connection } from "./connections"

export default async function insertProductOrder(
    order: Order

) {

    await connection("orders").insert(order)

}


