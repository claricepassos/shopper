import insertOrder from "../data/insertOrder";
import { OrderInput } from "../entities/Class";
import { IdGenerator } from "../services/idGenerator";

export default async function OrderBusiness (input: OrderInput ) {
    try{
 if (!input.name || !input.delivery_date || !input.products_list) {

    throw new Error ('Complete os campos name, delivery_date, products_list')
 }

    const id: string = new IdGenerator().generateId()

    const newOrder = { id,...input }

    await insertOrder(newOrder)

    return newOrder
 }
  catch (error:any) {
    throw new Error (error.message)
 }
}