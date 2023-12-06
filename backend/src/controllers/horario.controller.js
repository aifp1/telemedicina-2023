const { pool } = require("../../db");

async function getHorarios(request, response){
    try {
        const [result] = await pool.query('select * from horario');
        //console.log("Result categorias: ", result);
        return response.status(200).json(result);
    } catch (error) {
        console.log("Error: ", error);
        return response.status(500).json(error);          
    }
}

async function getHorario(request, response){
    try {
        const [result] = await pool.query('select * from horario where id_medico = ?', [request.params.id]);
        console.log("Result: ", result);
        return response.status(200).json(result);
    } catch (error) {
        console.log("Error: ", error)
        return response.status(500).json(error);        
    }
}

async function addHorario(request, response){
    try {
        const { fecha, hora_inicial, duracion, hora_fin, estado, id_medico } = request.body;
        const newHorario = await pool.query('insert into horario (fecha, hora_inicial, duracion, hora_fin, estado, id_medico) values (?, ?, ?, ?, ?, ?)', [fecha, hora_inicial, duracion, hora_fin, estado, id_medico]);
        console.log("Result: ", newHorario);
        return response.json({
            status: 200,
            message: 'Horario creado',
            id: newHorario[0].insertId,
        });        
    } catch (error) {
        console.log("Error: ", error)
        return response.status(500).json(error);        
    }
}

async function deleteHorario(request, response){
    try {
        const { id_horario } = request.body;
        const delete_horario = await pool.query('delete from horario where id_horario = ?', id_horario);
        console.log("Delete: ", delete_horario);
        return response.json(delete_horario);
    } catch (error) {
        console.log("Error: ", error)
        return response.status(500).json(error);        
    }
}

async function getHoras(request, response){
    try{
        const id_medico = request.params.id;
        const fecha = request.params.fecha;
        const [ horas ] = await pool.query('select * from horario where id_medico = ? and fecha = ?', [id_medico, fecha]);
        console.log("horas: ", horas);
        return response.json(horas);
    } catch (error) {
        console.log("Error: ", error)
        return response.status(500).json(error);        
    }
}

module.exports = {
    getHorarios,
    getHorario,
    addHorario,
    deleteHorario,
    getHoras,
}