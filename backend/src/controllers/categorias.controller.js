const { pool } = require("../../db");

async function getCategorias(request, response){
    try {
        const [result] = await pool.query('select * from categorias');
        //console.log("Result cagtegorias: ", result);
        return response.status(200).json(result);
    } catch (error) {
        console.log("Error: ", error);        
    }
}

async function getCategoria(request, response){
    try {
        const [result] = await pool.query('select * from categorias where id_categoria = ?', [request.params.id]);
        console.log("Result: ", result);
        return response.json(result)        
    } catch (error) {
        console.log("Error: ", error);
    }
}

async function addCategoria(request, response){
    try {
        const { nombre_categoria } = request.body
        const newCategoria = await pool.query('insert into categorias (nombre_categoria) values (?)', [nombre_categoria]);
        console.log("Result: ", newCategoria);
        return response.json({
            status: 200,
            message: "Categoria creada",
            id: newCategoria[0].insertId,
            nombre_categoria,
        });
    } catch (error) {
        console.log("Error: ", error);        
    }
}

async function deleteCategoria(request, response){
    try {
        const { id_categoria } = request.body;
        const deleteCategoria = await pool.query('delete from categorias where id_categoria = ?', request.params.id);
        console.log("Delete Categoria: ", deleteCategoria);
        return response.json(deleteCategoria);
    } catch (error) {
        console.log("Error: ", error);        
    }
}

module.exports = {
    getCategorias,
    getCategoria,
    addCategoria,
    deleteCategoria,
}