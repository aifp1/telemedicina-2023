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
        const { email, password, nombres, apellidos, lugar_atencion, id_prestacion, id_administrador } = request.body;
        const register = await registerAdmin({email, password});
        if(register.status != 200) return response.status(400).json(["The email is already use"]);
        console.log("Register: ", register);
        const newMedico = await pool.query('insert into medico (nombres, apellidos, lugar_atencion, id_prestacion, id_autorizacion, id_administrador) values (?, ?, ?, ?, ?, ?)', [nombres, apellidos, lugar_atencion, id_prestacion, register.id, id_administrador]);
        return response.json({
            status: 200,
            message: "Medico Creado",
            id: newMedico[0].insertId,
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