/* import { Request, Response } from "express"
/* import { IdGenerator } from "../services/idGenerator"
import { recepie, user, USER_ROLES } from "../entities/Class"
import { login } from "./login";
import { connection } from "../data/connections";


export default async function postRecepie(
    req: Request,
    res: Response
): Promise<void> {
    try {

        const { id, name, price, qty_ } = req.body
/* 
        const id: string = new IdGenerator().generateId()

        let today = new Date().toISOString().slice(0, 10) 

        const newRecepie: recepie = {
            id,
            name,
            description,
            date: today
        }


        if (!name || !description) {
            res.statusCode = 422
            throw new Error("Preencha os campos 'name' e 'descriptin'")
        }


        if (!login) {
            res.statusCode = 401
            throw new Error("Usuário não autorizado")
        }

        await connection('receita')
            .insert(newRecepie)

        res.status(201).send({
            message: "Receita cadastrada com sucesso",
            newRecepie
        })

    } catch (error) {
        res.send({ message: error.sqlMessage || error.message })
    }

} */