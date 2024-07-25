
import { Sequelize } from "sequelize";
import TransferModel from"../models/tranferModel.js";
//Mostrar todos los registros
export const getAllTranfers = async (req, res) => {
    try {
        const transfers = await TransferModel.findAll()
        res.json(transfers)
    } catch (error) {
        res.json({ message: error.message })
    }
    

}
//Mostrar un registro
export const getTransfer = async (req, res) => {
    try {
        const transfer = await TransferModel.findAll({
            where: { id: req.params.id}
        })
        res.json(transfer[0])
    } catch (error) {
        res.json({ message: error.message })
    }

}
//Crea un tranfer
export const createTransfer = async (req, res) => {
    try {
        await TransferModel.create(req.body)
        res.json({ "message": "¡Registro creado exitosamente!" })

    } catch (error) {
        res.json({ message: error.message})
    }
}

//Actualizar un registro
export const updateTranfer = async (req, res) => {
    try {
        await TransferModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({ "message": "¡Registro actualizado exitosamente!" })
    } catch (error) {
        res.json({ message: error.message})
    }
}
//Borrar un registro
export const deleteTranfer = async (req, res) => {
    try {
        await TransferModel.destroy({
            where: { id: req.params.id }
        })
        res.json({ "message": "¡Registro borrado exitosamente!" })
    } catch (error) {
        res.json({ message: error.message })

    }
}

//Consultar tranfer por fecha
export const getQueryTransfers = async (req, res) => {
    console.log(req.params.fec_traslado)
    try {
        const transfers = await TransferModel.findAll({
            where: {
                fec_traslado: req.params.fec_traslado}
                
            
        })
        res.json(transfers)  //obtener respuesta
    } catch(error) {
        res.json({message: error.message })
    }
}