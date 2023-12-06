const { pool } = require("../../db");

async function getPrestacionesMedicos(request, response){
    try {
        const [result] = await pool.query('select * from prestaciones_medico');
        console.log("Result medico: ", result);
        return response.status(200).json(result);
    } catch (error) {
        console.log("Error: ", error);        
    }
}

async function getPrestacionMedico(request, response){
    try {
        console.log("Request: ", request);
        if(request.body.id_prestacion){
            const [result] = await pool.query('select * from prestaciones_medico where id_prestacion = ?', [request.body.id_prestacion]);
            console.log("Result: ", result);
            return response.json(result);
        }
        if(request.body.id_medico){
            const [result] = await pool.query('select * from prestaciones_medico where id_medico = ?', [request.body.id_medico]);
            console.log("Result: ", result);
            return response.json(result);
        }
    } catch (error) {
        console.log("Error: ", error);        
    }
}

async function addPrestacionMedico(request, response){
    try {
        console.log("Request body", request.body);
        const { id_prestacion, id_medico } = request.body;
        const newPrestacionMedico = await pool.query('insert into prestaciones_medico (id_prestacion, id_medico) values (?, ?)', [id_prestacion, id_medico]);
        console.log("newPrestacionMedico: ", newPrestacionMedico);
        return response.json({
            status: 200,
            message: "Prestacion Medico creada",
            id: newPrestacionMedico[0].insertId,
        });
    } catch (error) {
        console.log("Error: ", error);        
    }
}

async function deletePrestacionMedico(request, response){
    try {
        const { id_prestaciones_medico } = request.body;
        const delete_medico = await pool.query('delete from prestaciones_medico where id_prestaciones_medico = ?', id_prestaciones_medico);
        console.log("Delete medico: ", delete_medico);
        return response.json(delete_medico);
    } catch (error) {
        console.log("Error: ", error)
        return response.status(500).json(error);
    }
}

module.exports = {
    getPrestacionesMedicos,
    getPrestacionMedico,
    addPrestacionMedico,
    deletePrestacionMedico,
}