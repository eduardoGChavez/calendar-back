import { Sequelize } from "sequelize";

const db = new Sequelize('calendar', 'admin', 'asddsa.123321', {
    host: 'database-calendar.cro8sjffnmiv.us-west-1.rds.amazonaws.com',
    dialect: 'mysql'
});

export default db;