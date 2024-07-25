import { Sequelize, Op } from "sequelize";
import SiembraModel from "../models/siembraModel.js";

//Mostrar 
export const getAllSowings = async (req, res) => {
    try {
        const sowings = await SiembraModel.findAll();
        res.json(sowings);
    } catch (error) {
        res.json({ message: error.message });
    }
}
//Mostrar una siembra
export const getSowing = async (req, res) => {
    try {
        const sowing = await SiembraModel.findAll({
            where: { Id_Siembra: req.params.Id_Siembra },
        })
        res.json(sowing[0])
    } catch (error) {
        res.json({ message: error.message });
    }
}

//crear una siembra
export const createSowing = async (req, res) => {
    try {
        await SiembraModel.create(req.body)
        res.json({ "message": "siembra creada" })
    } catch (error) {
        res.json({ message: error.message })
    }
}
//actualizar siembra
export const updateSowing = async (req, res) => {
    try {
        await SiembraModel.update(req.body, {
            where: { Id_Siembra: req.params.Id_Siembra }
        })
        res.json({ "message": "siembra actualizada" })
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Eliminar siembra
export const deleteSowing = async (req, res) => {
    try {
        await SiembraModel.destroy({
            where: { Id_Siembra: req.params.Id_Siembra }
        })
        res.json({ "message": "La siembra ha sido eliminada exitosamente" })
    } catch (error) {
        res.json({ message: error.message })
    }
}

//consutar una siembra
export const getQuerySowing = async (req, res) => {
    try {
        const sowing = await SiembraModel.findAll({
            where: {
                Id_Siembra: req.params.Id_Siembra
            }
        })
        res.json(sowing[0])
    } catch (error) {
        res.json({ message: error.message });
    }
}