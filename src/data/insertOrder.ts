import { Order } from "../entities/Class"
import { connection } from "./connections"

export type OrderInput= {
    id: string,
    name: string,
    delivery_date: string,
}

export default async function insertOrder(input: Order):Promise<void>{


try {
    const order = {
        id: input.id,
        name:input.name,
        delivery_date: input.delivery_date
    }
    await connection("order").insert(order)

    const items = input.products_list.map((i) =>{
        return{
            product_quantity:i.product_quantity,
            products_id: i.products_id,
            order_id: order.id
        }
    })
    await connection("products_list").insert(items)

    
} catch (error) {
    
}
} 


