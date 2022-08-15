import express from 'express';
// import { createUser, getAllUsers, getUser, updateUser, deleteUser } from '../controllers/AccountController.js';
import { createEvent, getEvent } from '../controllers/EventController.js';

const routerEvent = express.Router();

// routerEvent.get('/', getAllUsers);
routerEvent.get('/:email', getEvent);
routerEvent.post('/', createEvent);
// routerEvent.put('/:id', updateUser);
// routerEvent.delete('/:id', deleteUser);

export default routerEvent;