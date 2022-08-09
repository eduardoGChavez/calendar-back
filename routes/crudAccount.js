import express from 'express';
import { createUser, getAllUsers, getUser, updateUser, deleteUser } from '../controllers/AccountController.js';
// import { getAllBlogs, getBlog, createBlog, updateBlog, deleteBlog } from '../controllers/BlogController.js';
// const routerBlogs = express.Router();

// routerBlogs.get('/', getAllBlogs);
// routerBlogs.get('/:id', getBlog);
// routerBlogs.post('/', createBlog);
// routerBlogs.put('/:id', updateBlog);
// routerBlogs.delete('/:id', deleteBlog);

const routerUsers = express.Router();

routerUsers.get('/', getAllUsers);
routerUsers.get('/:email&:password', getUser);
routerUsers.post('/', createUser);
routerUsers.put('/:id', updateUser);
routerUsers.delete('/:id', deleteUser);

export default routerUsers;