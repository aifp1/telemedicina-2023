const { pool } = require('../../db');
const { registerAdmin } = require('./autorizacion.controller');

async function getAdmins(request, response){
    try {
        const [result] = await pool.query('select * from administrador');
        console.log("first: ", result);
        return response.json(result);
    } catch (error) {
        console.log("Error: ", error);        
    }
}

async function getAdmin(request, response){
    try {
        console.log("Request: ", request.body);
        console.log("Request params: ", request.params);
        const [result] = await pool.query('select * from administrador where id_administrador = ?', [request.params.id]);
        console.log("first: ", result);
        return response.json(result);
    } catch (error) {
        console.log("Error: ", error);        
    }
}

async function addAdmin(request, response){
    try {
        const { email, password, nombres, apellidos } = request.body
        const userFound = await pool.query('select * from autorizacion where email_autorizacion = ?', email);
        if(userFound[0] === null) return response.status(400).json(['Email is not valid']);
        const newAdmin = await pool.query('insert into administrador (nombres, apellidos) values (?, ?)', [nombres, apellidos]);
        const register = await registerAdmin({email,password, id_administrador: newAdmin[0].insertId});
        if(register.status != 200) return response.status(400).json(["The email is already use"]);        
        return response.json({
            status: 200,
            message: "Administrador creado",
            id: newAdmin[0].insertId,
            register: register.id,
            nombres,
            apellidos,
            email,
        })                
    } catch (error) {
        console.log("Error: ", error.message);        
    }
}

async function deleteAdmin(request, response){
    try {
        const { id_autorizacion } = request.body;
        const deletAdmin = await pool.query('delete from administrador where id_autorizacion = ?', id_autorizacion);
        console.log("DeleteAdmin: ", deletAdmin);
        return request.json('ok');
    } catch (error) {
        console.log("Error: ", error);        
    }
}

module.exports = {
    getAdmins,
    getAdmin,
    addAdmin,
    deleteAdmin,
}