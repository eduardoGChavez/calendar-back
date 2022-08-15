import express from 'express';
import { createUser, getAllUsers, getUser, updateUser, deleteUser } from '../controllers/AccountController.js';

const routerUsers = express.Router();

routerUsers.get('/', getAllUsers);
routerUsers.get('/:email&:password', getUser);
routerUsers.post('/', createUser);
routerUsers.put('/:id', updateUser);
routerUsers.delete('/:id', deleteUser);

export default routerUsers;