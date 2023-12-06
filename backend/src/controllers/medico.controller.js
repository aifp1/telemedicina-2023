const { pool } = require("../../db");
const { registerAdmin } = require('./autorizacion.controller');

async function getMedicos(request, response){
    try {
        const [result] = await pool.query('select * from medico');
        console.log("Result medico: ", result);
        return response.status(200).json(result);
    } catch (error) {
        console.log("Error: ", error);        
    }
}

async function getMedico(request, response){
    try {
        const [result] = await pool.query('select * from medico where id_prestacion = ?', [request.params.id]);
        console.log("Result: ", result);
        return response.json(result);
    } catch (error) {
        console.log("Error: ", error);        
    }
}

async function addMedico(request, response){
    try {
        console.log("Request body", request.body);
        const { email, password, nombres, apellidos, lugar_atencion, id_administrador } = request.body;
        const userFound = await pool.query('select * from autorizacion where email_autorizacion = ?', email);
        if(userFound[0] === null) return response.status(400).json(['Email is not valid']);
        const newMedico = await pool.query('insert into medico (nombres, apellidos, lugar_atencion, id_administrador) values (?, ?, ?, ?)', [nombres, apellidos, lugar_atencion, id_administrador]);
        const register = await registerAdmin({email, password, id_medico: newMedico[0].insertId});
        if(register.status != 200) return response.status(400).json(["The email is already use"]);
        console.log("Register: ", register);
        return response.json({
            status: 200,
            message: "Medico Creado",
            id: newMedico[0].insertId,
            register: register.id,
            nombres,
            apellidos,
            email,
            lugar_atencion,
        });
    } catch (error) {
        console.log("Error: ", error);        
    }
}

async function deleteMedico(request, response){
    try {
        const { id_medico } = request.body;
        const delete_medico = await pool.query('delete from medico where id_medico = ?', id_medico);
        console.log("Delete medico: ", delete_medico);
        return response.json(delete_medico);
    } catch (error) {
        console.log("Error: ", error)
        return response.status(500).json(error);
    }
}

module.exports = {
    getMedicos,
    getMedico,
    addMedico,
    deleteMedico,
}