import db from "../database/db.js";
import { DataTypes } from "sequelize";


const AlimentoModel = db.define('alimentacion',{
    fec_alimento: { type: DataTypes.DATEONLY},
    cant_racionkg: { type: DataTypes.STRING},
    tipo_alimento: {type: DataTypes.STRING},
    hor_alimento: {type: DataTypes.TIME},
    vlr_alimento: {type: DataTypes.STRING}
},
{
    freezeTableName:true
});

export default AlimentoModel