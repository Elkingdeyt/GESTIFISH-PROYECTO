import { Sequelize } from "sequelize";
import EstanqueModel from "../models/estanqueModel.js";

export const getAllEstanque = async (req, res) => {
    try{
        const Estanques = await EstanqueModel.findAll()
        res.json(Estanques)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const getEstanque = async (req, res) => {
    try {
        const Estanques = await EstanqueModel.findAll({
            where: { Id_Estanque: req.params.Id_Estanque }
        })
        res.json(Estanques[0])
    } catch(error) {
        res.json({ message: error.message })
    }
}

export const createEstanque = async (req, res) => {
    try{
        const {Id_Estanque, Nom_Estanque, Esp_Agua, Tip_Estanque, Lar_Estanque, Anc_Estanque, Des_Estanque, Rec_Agua} = req.body
        const Img_Estanque = req.file ? req.file.filename : null

        await EstanqueModel.create({
            Id_Estanque, 
            Nom_Estanque,
            Esp_Agua,
            Tip_Estanque,
            Lar_Estanque, 
            Anc_Estanque, 
            Des_Estanque, 
            Img_Estanque,
            Rec_Agua
        })
        res.json({ "message": "¡Registro creado Exitosamente!" })
        
    }catch (error) {
        res.json({ message: error.message})
    }
}

export const updateEstanque = async (req, res) => {

    try{
        const {Id_Estanque, Nom_Estanque, Esp_Agua, Tip_Estanque, Lar_Estanque, Anc_Estanque, Des_Estanque, Img_Estanque, Rec_Agua } = req.body
        const foto = req.file ? req.file.filename : null

        if (foto != null) {
            await EstanqueModel.update({
                Id_Estanque, 
                Nom_Estanque,
                Esp_Agua,
                Tip_Estanque,
                Lar_Estanque, 
                Anc_Estanque, 
                Des_Estanque, 
                Img_Estanque,
                Rec_Agua
            },{where: {Id_Estanque: req.params.Id_Estanque} })
           
        }else{
            await EstanqueModel.update({
                Id_Estanque, 
                Nom_Estanque,
                Esp_Agua,
                Tip_Estanque,
                Lar_Estanque, 
                Anc_Estanque, 
                Des_Estanque, 
                Img_Estanque,
                Rec_Agua
            },{where: {Id_Estanque: req.params.Id_Estanque} })
        }
         res.json({ "message": "¡Registro actualizado Exitosamente!" })
         
    }catch (error) {
        res.json({ message: error.message })
    }
}

export const deleteEstanque = async (req, res) => {
    try {
        await EstanqueModel.destroy({
            where: { Id_Estanque: req.params.Id_Estanque }
        })
        res.json({ "message": "¡Registro borrado Exitosamente!" })
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getQueryEstanque = async (req, res) => {

    try {
        const estanque = await EstanqueModel.findAll({
            where: {
                Id_Estanque: {
                    [Sequelize.Op.like]: `%${req.params.Id_Estanque}%`
                }
            }
        })

            res.json(estanque)
    } catch (error) {
        res.json({ message: error.message})
    }
}
