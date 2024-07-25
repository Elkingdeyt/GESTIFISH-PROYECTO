import { Sequelize, Op } from "sequelize";
import alimentacionModel from "../models/alimentacionModel.js";

export const getAllAlimento = async (req, res) =>{
    try{
        const alimento = await alimentacionModel.findAll()
        res.json(alimento)
    } catch(error){
        res.json({ message: error.message})
    }
}
//Mostrar un Registro
export const getAlimento = async (req, res) =>{
    try {
        const alimento = await alimentacionModel.findAll({
            where: { id: req.params.id }
        })
        res.json(alimento[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Crear un player
export const createAlimento = async (req, res) => {
    try {
        await alimentacionModel.create(req.body)
        res.json({ "message": "iRegistro creado exitosamente!" })
    }catch (error){
        res.json({ message: error.message })
    }
}



//Actualizar un registro
export const updateAlimento = async (req, res) =>{
    try{
        await alimentacionModel.update(req.body,{
            where: { id: req.params.id }
        })
        res.json({ "message": "iRegistro Actualizado exitosamente!" })
    }catch (error){
        res.json({ message: error.message })
    }
}

//Borrar un registro
export const deleteAlimento = async (req, res) =>{
    try{
        await alimentacionModel.destroy({
            where: { id: req.params.id }
        })
        res.json({ "message": "¡Registro borrado exitosamente!" })
    }catch (error){
        res.json({ message: error.message })
    }

}


export const getQueryAlimento = async(req, res) =>{
    console.log(req.params.fec_alimento)
    try{
        const Alimento = await alimentacionModel.findAll({
            where:{
              fec_alimento:req.params.fec_alimento}
        });
        res.json(Alimento);
    } catch(error){
        res.json({message: error.message});
    }
}