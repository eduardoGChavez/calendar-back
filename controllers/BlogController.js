//importamos el Modelo
import BlogModel from "../models/BlogModel.js";

//** Métodos para el CRUD **/

//Mostrar todos los blogs
export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await BlogModel.findAll();
        res.status(200).json(blogs)
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Mostrar un blog
// export const getBlog = async (req, res) => {
//         try {
//             const id = req.params.id
//             await BlogModel.findById( {_id:id} ).then( (blog) => {
//                 res.status(200).json(blog)
//             })        
//         } catch (error) {
//             res.json( {message: error.message} )
//         }
// }
export const getBlog = async (req, res) => {
    try {
        const blogs = await BlogModel.findAll({
            where: { id:req.params.id }
        });
        res.status(200).json(blogs[0]);
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Crear un blog
export const createBlog = async (req, res) => {
    try {
       await BlogModel.create(req.body);
       res.status(200).json({
           "message":"¡Blog creado correctamente!"
       })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Actualizar un blog
export const updateBlog = async (req, res) => {
    try {
        const id = req.params.id
        await BlogModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.status(200).json({
            "message":"¡blog actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Eliminar un blog
export const deleteBlog = async (req, res) => {
    try {
        const id = req.params.id
        await BlogModel.destroy({
            where: { id: req.params.id }
        })
        res.status(200).json({
            "message":"¡blog eliminado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}