const { pool } = require("../../db");

async function getCategorias(request, response){
    try {
        const [result] = await pool.query('select * from categorias');
        console.log("Result cagtegorias: ", result);
        return response.status(200).json(result);
    } catch (error) {
        console.log("Error: ", error);        
    }
}

module.exports = {
    getCategorias,
}