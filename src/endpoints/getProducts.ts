import { Request, Response } from 'express';
import findProducts from '../data/findProducts';


export default async function getProducts(
    req: Request,
    res: Response

) {
    try {
        const products = await findProducts()

        res.status(200).send({
            message: 'Sucesso!!',
            products
        })


    } catch (error: any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}


