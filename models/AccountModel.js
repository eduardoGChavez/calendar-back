import db from "../database/db.js";
import DataTypes from "sequelize";

const AccountModel = db.define('users', {
        name: {type: DataTypes.STRING},
        email: {type: DataTypes.STRING},
        password: {type: DataTypes.STRING},
    },
    {
        timestamps: false,
    }
);

export default AccountModel;