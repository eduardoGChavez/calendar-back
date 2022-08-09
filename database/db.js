import { Sequelize } from "sequelize";

const db = new Sequelize('app', 'root', 'EduardoGarciaChavez', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;