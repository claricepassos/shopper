/* import { Request, Response } from 'express';
import insertOrder from '../data/insertOrder';
import insertProductOrder from '../data/insertProductOrder';
import { Order } from '../entities/Class';
import { Products_list } from '../entities/Class';
import { IdGenerator } from '../services/idGenerator';

export interface OrderInput{
    id:string,
    name:string,
    delivery_date: string,
    products: Products_list[]
}



export default async function postOrder(
    req: Request,
    res: Response
) {

    const {name, delivery_date, products_list, product_quantity, products_id } = req.body 


    try {
        if (
            !name ||
            !delivery_date
        ) {
            res.status(400).send({
                message: 'Preencha todos os campos!'
            })
        }

        

        const id: string = new IdGenerator().generateId()


        const newOrder = {
            id, name, delivery_date
        }

        const order_id: string = newOrder.id

        const newProductOrder = { products_id, product_quantity, order_id } as unknown as []

        await insertOrder(
            newOrder
        )

      await insertProductOrder(
            newProductOrder
        ) 

        res
            .status(200).send({
                message: 'Ordem criado com sucesso!',
                newOrder,
                newProductOrder
            })


    } catch (error: any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })

    }

}

 */