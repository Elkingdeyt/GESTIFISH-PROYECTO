import { Sequelize } from "sequelize";


const db = new Sequelize('gestifish_alimentacion' , 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
})

export default db