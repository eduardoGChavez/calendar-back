//importamos el Modelo
import AccountModel from "../models/AccountModel.js";

//** Métodos para el CRUD **/

//Mostrar todos los users
export const getAllUsers = async (req, res) => {
    try {
        const users = await AccountModel.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.json( {messageType: "0", message: "Error al obtener todos los datos: " + error.message} );
    }
}
//Mostrar un user
export const getUser = async (req, res) => {
    try {
        const user = await AccountModel.findAll({
            where: { email:req.params.email, password:req.params.password }
        });
        res.status(200).json(user[0]);
    } catch (error) {
        res.json( {message: error.message} );
    }
}
//Crear un user
export const createUser = async (req, res) => {
    try {
       await AccountModel.create(req.body);
       res.status(200).json({
            messageType: "1",
            message:"¡Cuenta creada correctamente!"
       });
    } catch (error) {
        res.json( {messageType: "0", message: error.message} );
    }
}
//Actualizar un user
export const updateUser = async (req, res) => {
    try {
        const id = req.params.id
        await AccountModel.update(req.body, {
            where: { id: req.params.id }
        });
        res.status(200).json({
            messageType: "1",
            message:"¡Cuenta actualizada correctamente!"
        });
    } catch (error) {
        res.json( {messageType: "0", message: error.message} );
    }
}
//Eliminar un user
export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id
        await AccountModel.destroy({
            where: { id: req.params.id }
        });
        res.status(200).json({
            messageType: "1",
            message: "¡Cuenta eliminado correctamente!"
        });
    } catch (error) {
        res.json( {messageType: "0", message: error.message} );
    }
}