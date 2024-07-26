import express from "express";
import { 
  createResponsable, 
  deleteResponsable, 
  getAllResponsable, 
  getResponsable, 
  getQueryResponsable, 
  updateRegistro 
} from "../controllers/responsableController.js";

const routerResponsable = express.Router();

routerResponsable.get('/', getAllResponsable);
routerResponsable.get('/:Id_Responsable', getResponsable);
routerResponsable.post('/', createResponsable);
routerResponsable.put('/:Id_Responsable', updateRegistro);
routerResponsable.delete('/:Id_Responsable', deleteResponsable);
routerResponsable.get('/Doc_Responsable/:Doc_Responsable', getQueryResponsable);

export default routerResponsable;