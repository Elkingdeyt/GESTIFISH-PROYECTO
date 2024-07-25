import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const SiembraModel = db.define('siembra', {
    Id_Siembra: { type: DataTypes.NUMBER, primaryKey: true},
    Can_Peces: { type: DataTypes.NUMBER },
    Fec_Siembra: { type: DataTypes.DATE },
    Fec_PosibleCosecha: { type: DataTypes.DATE },
    Pes_Actual: { type: DataTypes.NUMBER },
    Obs_Siembra: { type: DataTypes.STRING },
    Hor_Siembra: { type: DataTypes.TIME },
    Gan_Peso: { type: DataTypes.FLOAT },
    Vlr_Siembra: { type: DataTypes.NUMBER }
}, {
    freezeTableName:true
})

export default SiembraModel