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
        return response.json('ok');
    } catch (error) {
        console.log("Error: ", error);        
    }
}

async function addAdmin(request, response){
    try {
        const { email, password, nombres, apellidos } = request.body
        const register = await registerAdmin({email,password});
        if(register.status != 200) return response.status(400).json(["The email is already use"]);
        const newAdmin = await pool.query('insert into administrador (nombres, apellidos, id_autorizacion) values (?, ?, ?)', [nombres, apellidos, register.id]);
        return response.json({
            status: 200,
            message: "Administrador creado",
            id: newAdmin[0].insertId,
            nombres,
            apellidos,
            email,
        })                
    } catch (error) {
        console.log("Error: ", error.message);        
    }
}

module.exports = {
    getAdmins,
    getAdmin,
    addAdmin,
}