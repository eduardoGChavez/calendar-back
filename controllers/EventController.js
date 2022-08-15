//importamos el Modelo
import EventModel from "../models/EventModel.js";
import AttendeeModel from "../models/AttendeeModel.js";

import sequelizeQuery from "sequelize";

//** Métodos para el CRUD **/

// //Mostrar todos los users
// export const getAllUsers = async (req, res) => {
//     try {
//         const users = await AccountModel.findAll();
//         res.status(200).json(users);
//     } catch (error) {
//         res.json( {messageType: "0", message: "Error al obtener todos los datos: " + error.message} );
//     }
// }
//Mostrar un evento
export const getEvent = async (req, res) => {
    try {
        let events = []

        const res_id_events = await AttendeeModel.findAll({
            attributes: ['id_event'],
            where: { email:req.params.email }
        });
        let id_events = [];
        for(let i = 0; i < res_id_events.length; i++){
            id_events.push(res_id_events[i].dataValues.id_event);
        }
        let event = {
            id: null,
            title: null,
            start: null,
            organizer: null,
            guests: []
        };
        for(let i = 0; i < id_events.length; i++) {
            const eventData = await EventModel.findAll({
                where: { id: id_events[i] }
            });
            event.id = eventData[0].dataValues.id;
            event.title = eventData[0].dataValues.title;
            event.start = eventData[0].dataValues.start;
            event.end = eventData[0].dataValues.end;
            event.guests = [];

            const attendees = await AttendeeModel.findAll({
                where: { id_event: id_events[i] }
            });
            
            for(let i = 0; i < attendees.length; i++){
                if(attendees[i].dataValues.organizer) {
                    event.organizer = attendees[i].dataValues.email;
                }
                else {
                    event.guests.push({correo: attendees[i].dataValues.email});
                }
            }
            events.push(JSON.stringify(event));
        }
        let eventsJson = [];
        for(let i = 0; i < events.length; i++) {
            eventsJson.push(JSON.parse(events[i]));
        }
          
        res.status(200).json(eventsJson);
    } catch (error) {
        res.json( {message: error.message} );
    }
}
//Crear un evento
export const createEvent = async (req, res) => {
    try {
        let bodyEvent = {
            title: req.body.title,
            start: req.body.start,
            end: req.body.end,
        }
        let dataEvent = await EventModel.create(bodyEvent);
        let bodyAttenders = { // Organizer
            id_event: dataEvent.dataValues.id,
            email: req.body.organizer,
            organizer: true,
        }
        await AttendeeModel.create(bodyAttenders);
        bodyAttenders.organizer = false;
        for (let i = 0; i < req.body.guests.length; i++) {
            bodyAttenders.email = req.body.guests[i].correo;
            await AttendeeModel.create(bodyAttenders);
        }

        res.status(200).json({
            messageType: "1",
            message:"¡Evento creado correctamente!"
        });
    } catch (error) {
        res.json({ messageType: "0", message: error.message });
    }
}

// //Actualizar un user
// export const updateUser = async (req, res) => {
//     try {
//         const id = req.params.id
//         await AccountModel.update(req.body, {
//             messageType: "1",
//             where: { id: req.params.id }
//         });
//         res.status(200).json({
//             message:"¡Cuenta actualizada correctamente!"
//         });
//     } catch (error) {
//         res.json( {messageType: "0", message: error.message} );
//     }
// }
// //Eliminar un user
// export const deleteUser = async (req, res) => {
//     try {
//         const id = req.params.id
//         await AccountModel.destroy({
//             messageType: "1",
//             where: { id: req.params.id }
//         });
//         res.status(200).json({
//             message: "¡Cuenta eliminado correctamente!"
//         });
//     } catch (error) {
//         res.json( {messageType: "0", message: error.message} );
//     }
// }