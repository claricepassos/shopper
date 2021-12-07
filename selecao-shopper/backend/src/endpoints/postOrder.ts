 import { Request, Response } from "express"
 import { IdGenerator } from "../services/idGenerator"
import { order } from "../entities/Class";
import { connection } from "../data/connections";


export default async function postOrder(
    req: Request,
    res: Response
): Promise<void> {
    try {

        const { client_name, product_list_id, delivery_date } = req.body

        const id: string = new IdGenerator().generateId()

        //let today = new Date().toISOString().slice(0, 10) 

        const newOrder: order = {
            id,
            client_name,
            delivery_date,
            product_list_id,

        }


        if (!client_name || !product_list_id || !delivery_date) {
            res.statusCode = 422
            throw new Error("Preencha os campos 'client_name', 'product_list_id' e 'delivery_date'")
        }


/*         if (!login) {
            res.statusCode = 401
            throw new Error("Usuário não autorizado")
        } */

        await connection('Orders')
            .insert(newOrder)

        res.status(201).send({
            message: "order added successfully",
            newOrder
        })

    } catch (error:any) {
        res.send({ message: error.sqlMessage || error.message })
    }

} 