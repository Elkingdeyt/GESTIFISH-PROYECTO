import { Sequelize, Op} from "sequelize";
import ResponsableModel from "../models/responsableModel.js";

export const getAllResponsable = async (req, res) => {
    try {
        const responsable = await ResponsableModel.findAll()
        res.json(responsable)
    } catch (error) {
        res.json({ message : error.message })
    }
}

// MOSTRAR UN REGISTRO
export const getResponsable = async (req, res) => {
    try {
        const responsable = await ResponsableModel.findALL({
            where: { id:req.params.Id_Responsable}})
        res.json(responsable[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}

// CREAR UN RESPONSABLE
export const createResponsable = async (req, res) => {
    try {
        await ResponsableModel.create(req.body)
        res.json({ "message": "¡Registro creado exitosamente!" })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// ACTUALIZAR UN REGISTRO
export const updateRegistro = async (req, res) => {
    try {
        await ResponsableModel.update(req.body, {
            where: { Id_Responsable: req.params.Id_Responsable }
        })
        res.json({ "message": "¡Registro Actualizado Exitosamente!"})
    } catch (error) {
        req.json ({ message: error.message })
    }
}

// BORRA UN REGISTRO
export const deleteResponsable = async (req, res) => {
    try {
        await ResponsableModel.destroy ({
            where: { Id_Responsable: req.params.Id_Responsable }
        })
        res.json({ "message": "¡Registro borrado exitosamente! "})
    } catch (error) {
        res.json({ message: error.message })
    }
}

// CONSULTAR RESPONSABLE POR DOCUMENTO
export const getQueryResponsable = async (req, res) => {
    console.log(req.params.Doc_Responsable)
    try {
        const responsable = await ResponsableModel.findAll({
            where: {
                Doc_Responsable:req.params.Doc_Responsable}
            });
        res.json(responsable)
    } catch (errror) {
        res.json({ message: errror.message })
    }
}