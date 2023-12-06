const bcrypt = require('bcrypt');

const { pool } = require('../../db');
const { createAccessToken } = require('../libs/jwt');

async function registerAdmin(request, response){
    try {
        const { email, password } = request;
        let newAdmin;
        // const userFound = await pool.query('select * from autorizacion where email_autorizacion = ?', email);
        // console.log("userFound: ", userFound);
        // if(userFound[0] != '') return {status: 400};
        const passwordHash = bcrypt.hashSync(password, 10);
        console.log("Antes: ", request);
        console.log("Requestssssssss: ", request.id_administrador);
        if(request.id_administrador){
            newAdmin = await pool.query('insert into autorizacion (email_autorizacion, password_autorizacion, id_administrador) values (?,?,?)', [email, passwordHash, request.id_administrador]);
        }
        if(request.id_medico){
            newAdmin = await pool.query('insert into autorizacion (email_autorizacion, password_autorizacion, id_medico) values (?,?,?)', [email, passwordHash, request.id_medico]);            
        }
        if((request.id_administrador === undefined) && (request.id_medico === undefined)) return response.status(400).json(['No hay personal asignado']);
        console.log("asdasdasdaaadabbbb: ", newAdmin);
        console.log("aaaaa: ", newAdmin[0].insertId);
        return {status: 200, id: newAdmin[0].insertId};
    } catch (error) {
        console.log("Error: ", error);
    }
}

async function loginAdmin(request, response){
    try {
        console.log("Request: ", request.body);
        const { email, password } = request.body;
        const userFound = await pool.query('select * from autorizacion where email_autorizacion = ?', email);
        console.log("userFound: ", userFound);
        if(userFound[0] === null) return response.status(400).json(['Email is not valid']);
        console.log("pass: ", userFound[0][0].password_autorizacion);
        const isMatch = await bcrypt.compareSync(password, userFound[0][0].password_autorizacion);
        if(!isMatch) return response.status(400).json(['Password is not valid']);
        const token = await createAccessToken({id: userFound[0][0].id_autorizacion});
        let profile;
        console.log("ID: ", userFound[0][0].id_autorizacion);
        try {
           profile = await pool.query('select * from administrador where id_autorizacion = ?', userFound[0][0].id_autorizacion);
        } catch (error) {
            try {
                profile = await pool.query('select * from medico where id_autorizacion = ?', userFound[0][0].id_autorizacion);            
            } catch (error) {
                console.log("Error: ", error);
            }
        }
        console.log("Profile: ", profile);
        response.cookie('token', token);
        return response.json({...profile[0][0]});        
    } catch (error) {
        console.log("Error: ", error);        
    }
}

async function logout(request, response){
    try {
        response.cookie("token", "", {
            expires: new Date(0),
        })
        return response.sendStatus(200);
    } catch (error) {
        return response.status(500).json({ message: error.message });        
    }
}

module.exports = {
    registerAdmin,
    loginAdmin,
    logout,
}