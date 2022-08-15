import db from "../database/db.js";
import DataTypes from "sequelize";

const EventModel = db.define('events', {
        title: {type: DataTypes.STRING},
        start: {type: DataTypes.DATE},
        end: {type: DataTypes.DATE},
    },
    {
        timestamps: false,
    }
);

export default EventModel;