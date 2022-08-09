import db from "../database/db.js";
import DataTypes from "sequelize";

const BlogModel = db.define('blogs', {
    title: {type: DataTypes.STRING},
    content: {type: DataTypes.STRING},
    createdAt: {
        field: 'createAt',
        type: DataTypes.DATE,
    },
    updatedAt: {
        field: 'updateAt',
        type: DataTypes.DATE,
    },
});

export default BlogModel;