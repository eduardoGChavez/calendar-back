import express from 'express';
import { createEvent, deleteEvent, getEvent, updateEvent } from '../controllers/EventController.js';

const routerEvent = express.Router();

routerEvent.get('/:email', getEvent);
routerEvent.post('/', createEvent);
routerEvent.put('/:id', updateEvent);
routerEvent.delete('/:id', deleteEvent);

export default routerEvent;