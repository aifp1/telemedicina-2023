const { pool } = require("../../db");

async function getHoras_Pacientes(request, response){
    try {
        const [result] = await pool.query('select * from horas_pacientes');
        console.log("Result categorias: ", result);
        return response.status(200).json(result);
    } catch (error) {
        console.log("Error: ", error);
        return response.status(500).json(error);          
    }
}

async function getHora_Paciente(request, response){
    try {
        const [result] = await pool.query('select * from horas_pacientes where id_hora_paciente = ?', [request.params.id]);
        console.log("Result: ", result);
        return response.status(200).json(result);
    } catch (error) {
        console.log("Error: ", error)
        return response.status(500).json(error);        
    }
}

async function addHora_Paciente(request, response){
    try {
        const { id_paciente, id_horario } = request.body;
        const newHora_Paciente = await pool.query('insert into horario (id_paciente, id_horario) values (?, ?)', [id_paciente, id_horario]);
        console.log("Result: ", newHora_Paciente);
        return response.json({
            status: 200,
            message: 'Horario creado',
            id: newHora_Paciente[0].insertId,
        });        
    } catch (error) {
        console.log("Error: ", error)
        return response.status(500).json(error);        
    }
}

async function deleteHora_Paciente(request, response){
    try {
        const { id_hora_paciente } = request.body;
        const delete_hora_paciente = await pool.query('delete from horas_pacientes where id_hora_paciente = ?', id_hora_paciente);
        console.log("Delete: ", delete_hora_paciente);
        return response.json(delete_hora_paciente);
    } catch (error) {
        console.log("Error: ", error)
        return response.status(500).json(error);        
    }
}

module.exports = {
    getHoras_Pacientes,
    getHora_Paciente,
    addHora_Paciente,
    deleteHora_Paciente,
}