import { Request, Response } from 'express';
import insertProductOrder from '../data/insertProductOrder';
import { Client_Order, Order } from '../entities/Class';
import { IdGenerator } from '../services/idGenerator';


export default async function postProductOrder(

    req: Request,
    res: Response
) {


    const { product_quantity, products_id, order_id } = req.body
    
   try {
        if (
            !product_quantity ||
            !products_id ||
            !order_id
        ) {
            res.status(400).send({
                message: 'Preencha todos os campos!'
            })
        } 

    const newProductOrder: Order = {products_id, product_quantity, order_id}

    await insertProductOrder(
            newProductOrder
        )
        res
            .status(200).send({
                message: 'Ordem criado com sucesso!',
                newProductOrder
            })


    } catch (error: any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })

    }

}

 