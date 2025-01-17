import express from "express";
import { 
  createResponsable, deleteResponsable, getAllResponsable, getResponsable, getQueryResponsable, updateRegistro 
} from "../controllers/responsableController.js";
import { 
  createAlimento, deleteAlimento, getAllAlimento, getAlimento, updateAlimento, getQueryAlimento 
} from "../controllers/alimentacionController.js";
import { createTransfer, deleteTranfer, getAllTranfers, getTransfer, updateTranfer, getQueryTransfers 
  
} from "../controllers/transferController.js";

import { createEstanque, deleteEstanque, getAllEstanque, getEstanque, updateEstanque, getQueryEstanque } from "../controllers/estanqueController.js";

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
//rutas de traslado 
router.get('/', getAllTranfers )
router.get('/:id', getTransfer )
router.post('/', createTransfer)
router.put('/:id', updateTranfer)
router.delete('/:id', deleteTranfer)
router.get('/fec_traslado/:fec_traslado', getQueryTransfers)


// Rutas Para Estanque
router.get('/', getAllEstanque);
router.get('/:Id_Estanque', getEstanque);
router.post('/', upload.single('Img_Estanque'), createEstanque);
router.put('/:Id_Estanque', upload.single('Img_Estanque'), updateEstanque);
router.delete('/:Id_Estanque', deleteEstanque);
router.get('/Id_Estanque/:Id_Estanque', getQueryEstanque);


export default router;