const { pool } = require("../../db");

async function getPrestaciones(request, response){
    try {
        const [result] = await pool.query(`select * from prestaciones`);
        const objAgrupado = result.reduce((acomulador, objeto) => {
            const { id_prestacion, nombre_prestacion, id_categoria } = objeto;
            if(!acomulador[id_categoria]){
                acomulador[id_categoria] = {id_categoria: id_categoria, data: []}
            }
            acomulador[id_categoria].data.push({id_prestacion: id_prestacion, nombre_prestacion: nombre_prestacion});
            return acomulador;
        }, {});
        return response.status(200).json(objAgrupado);
    } catch (error) {
        console.log("Error: ", error);        
    }
}

async function getPrestacion(request, response){
    try {
        console.log("Request.params: ", request.params);
        const { id } = request.params;
        const [result] = await pool.query(`select * from prestaciones where id_categoria = ?`, id);
        console.log("PRestacion: ", result);
        return response.status(200).json(result);
    } catch (error) {
        console.log("Error: ", error);        
    }
}

async function addPrestacion(request, response){
    try {
        const { nombre_prestacion, id_categoria } = request.body;
        const newPrestacion = await pool.query('insert into prestaciones (nombre_prestacion, id_categoria) values (?, ?)', [nombre_prestacion, id_categoria]);
        console.log("new Prestacion: ", newPrestacion);
        return response.json({
            status: 200,
            message: "Prestacion creada",
            id: newPrestacion[0].insertId,
            nombre_prestacion,
        });
    } catch (error) {
        console.log("Error: ", error)
        return response.status(500).json(error);        
    }
}

async function deletePrestacion(request, response){
    try {
        const { id_prestacion } = request.body;
        const delete_prestacion = await pool.query('delete from prestaciones where id_prestacion = ?', id_prestacion);
        console.log("Delete categoria: ", delete_prestacion);
        return response.json(delete_prestacion);
    } catch (error) {
        console.log("Error: ", error)
        return response.status(500).json(error);
    }
}

module.exports = {
    getPrestacion,
    getPrestaciones,
    addPrestacion,
    deletePrestacion,
}