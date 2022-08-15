import express from 'express';
import cors from 'cors';
import db from "./database/db.js";
import accountRoute from './routes/crudAccount.js';
import eventRoute from './routes/crudEvent.js';
const app = express();

app.use( cors() );
app.use( express.json() );
// app.use('/blogs', blogRoutes);
app.use('/users', accountRoute);
app.use('/events', eventRoute);

try {
    await db.authenticate();
    console.log('Conexión exitosa a la DB');
} catch (error) {
    console.log(`Error en la conexión: ${error}`);
}

app.get('/', (req, res) => {
    res.send('Hola mundo');
});
app.listen(8000, () => {
    console.log('Server UP running http://localhost:8000/');
});