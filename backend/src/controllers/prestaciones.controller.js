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

module.exports = {
    getPrestacion,
    getPrestaciones,
}