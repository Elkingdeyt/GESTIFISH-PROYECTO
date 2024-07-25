import express from 'express'
import cors from 'cors'

import db from './database/db.js'
import AlimentoRoutes from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/alimentacion', AlimentoRoutes)
app.use('/alimentacion', AlimentoRoutes)


try {
    await db.authenticate()
    console.log("Conexión exitosa a la db")
} catch (error) {
    console.log(`Error de conexión a la db: ${error}`)
}


app.get('/', (req, res) => {
    res.send('Hola mundo')
})

app.listen(8000, () => {
    console.log('Serwer UP running in http://localhost:8000')
})
