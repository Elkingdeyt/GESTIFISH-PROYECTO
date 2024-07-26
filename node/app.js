import express, { Router } from 'express'
import cors from 'cors'
import dotenv from 'dotenv';

import db from './database/db.js'
import AlimentoRoutes from './routes/routes.js'
import routerResponsable from './routes/RouterResponsable.js'

const app = express()
const port = 3001;

app.use(cors())
app.use(express.json())
app.use('/alimentacion', AlimentoRoutes)
app.use('/responsable', routerResponsable)


db.authenticate()
  .then(() => console.log('Conexión a la base de datos establecida.'))
  .catch(err => console.error('Error de conexión a la db:', err));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})

