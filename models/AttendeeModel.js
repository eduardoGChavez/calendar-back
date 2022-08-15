import db from "../database/db.js";
import DataTypes from "sequelize";

const AttendeeModel = db.define('attendees', {
        id_event: {
            type: DataTypes.INTEGER
            // primaryKey: true
        },
        email: {type: DataTypes.STRING},
        organizer: {type: DataTypes.BOOLEAN},
        // start: {type: DataTypes.timestamps},
        // end: {type: DataTypes.timestamps},
    },
    {
        timestamps: false,
    }
);

export default AttendeeModel;