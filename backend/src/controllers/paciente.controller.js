const { pool } = require("../../db");

async function getPacientes(request, response){
    try {
        const [result] = await pool.query('select * from paciente');
        console.log("Result: ", result);
        return response.status(200).json(result);
    } catch (error) {
        console.log("Error: ", error)
        return response.status(500).json(error);
    }
}

async function getPaciente(request, response){
    try {
        const [result] = await pool.query('select * from paciente where id_paciente = ?', [request.params.id]);
        console.log("Result: ", result);
        return response.status(200).json(result);
    } catch (error) {
        console.log("Error: ", error)
        return response.status(500).json(error);    
    }
}

async function addPaciente(request, response){
    try {
        const { nombres, apellidos, fecha_nacimiento, email, telefono, comuna, prevision_salud } = request.body;
        const newPaciente = await pool.query('insert into paciente (nombres, apellidos, fecha_nacimiento, email, telefono, comuna, prevision_salud) values (?, ?, ?, ?, ?, ?, ?)', [nombres, apellidos, fecha_nacimiento, email, telefono, comuna, prevision_salud]);
        console.log("New Paciente: ", newPaciente);
        return response.json({
            status: 200,
            message: "Paciente creado",
            id: newPaciente[0].insertId,
            nombres,
            apellidos,
            fecha_nacimiento,
            email,
            telefono,
            comuna,
            prevision_salud,
        });
    } catch (error) {
        console.log("Error: ", error)
        return response.status(500).json(error);
    }
}

async function deletePaciente(request, response){
    try {
        const { id_paciente } = request.body;
        const delete_paciente = await pool.query('delete from paciente where id_paciente = ?', id_paciente);
        console.log("Delete: ", delete_paciente);
        return response.status(200).json(delete_paciente);
    } catch (error) {
        console.log("Error: ", error)
        return response.status(500).json(error);
    }
}

module.exports = {
    getPacientes,
    getPaciente,
    addPaciente,
    deletePaciente,
}