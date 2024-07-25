import express from "express";
import { 
  createResponsable, deleteResponsable, getAllResponsable, getResponsable, getQueryResponsable, updateRegistro 
} from "../controllers/responsableController.js";
import { 
  createAlimento, deleteAlimento, getAllAlimento, getAlimento, updateAlimento, getQueryAlimento 
} from "../controllers/alimentacionController.js";

const router = express.Router();

// Rutas para Responsable
router.get('/responsable', getAllResponsable);
router.get('/responsable/:Id_Responsable', getResponsable);
router.post('/responsable', createResponsable);
router.put('/responsable/:Id_Responsable', updateRegistro);
router.delete('/responsable/:Id_Responsable', deleteResponsable);
router.get('/responsable/Doc_Responsable/:Doc_Responsable', getQueryResponsable);

// Rutas para Alimento
router.get('/alimento', getAllAlimento);
router.get('/alimento/:id', getAlimento);
router.post('/alimento', createAlimento);
router.put('/alimento/:id', updateAlimento);
router.delete('/alimento/:id', deleteAlimento);
router.get('/alimento/fec_alimento/:fec_alimento', getQueryAlimento);

export default router;