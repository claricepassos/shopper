import { Request, Response } from 'express';
import insertOrder from '../data/insertOrder';
import { Client_Order, Order } from '../entities/Class';
import { IdGenerator } from '../services/idGenerator';


export default async function postOrder(

    req: Request,
    res: Response
) {

    const { name, delivery_date, orders } = req.body

    const { product_quantity, products_id, order_id } = req.body
    
    try {
        if (
            !name ||
            !delivery_date ||
            !orders
        ) {
            res.status(400).send({
                message: 'Preencha todos os campos!'
            })
        } 

    const id: string = new IdGenerator().generateId()

    const newOrder: Client_Order = {id, name, delivery_date, orders}


    const newProductOrder: Order = {product_quantity, products_id, order_id}

    await insertOrder(
            newOrder,
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

