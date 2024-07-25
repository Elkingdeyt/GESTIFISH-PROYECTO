import db from "../database/db.js";
import { DataTypes } from "sequelize";

const TransferModel = db.define('transfers', {
    fec_traslado: { type: DataTypes.DATEONLY },
    can_peces: { type: DataTypes.NUMBER },
    obs_traslado: { type: DataTypes.STRING },
    hor_traslado: { type: DataTypes.TIME},
})

export default TransferModel