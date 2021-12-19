 import { Request, Response } from 'express';
import OrderBusiness from '../business/OrderBusiness';
import insertOrder from '../data/insertOrder';
import { Order, OrderInput } from '../entities/Class';
import { Products_list } from '../entities/Class';
import { IdGenerator } from '../services/idGenerator';

const id = new IdGenerator()


export default async function OrderController(
    req: Request,
    res: Response
):Promise<void> {
    try {
        const input: OrderInput = {
            name: req.body.name,
            delivery_date: req.body.delivery_date,
            products_list: req.body.products_list
        }

      const newOrder = await OrderBusiness(input)

        res.status(200).send(newOrder)
    } catch (error:any) {
        res.status(400).send({
            message: error.message || error.sqlMessage    
    })
}
}