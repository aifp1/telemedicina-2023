const jwt = require('jsonwebtoken');

function createAccessToken(payload) {
    //se crea una promesa con el token
    return new Promise((resolve, reject) => {
        jwt.sign(
            //se le da el payload, es decir, la id del usuario creado
            payload,
            //se da la clave del token
            process.env.TOKEN_SECRET,
            {
                //el token expira en 1 dia
                expiresIn: "1d",
            },
            (err, token) => {
                //en caso de que haya un error se responde con reject
                if(err) reject(err);
                //caso contrario se pasa el token generados 
                resolve(token);
            }
        );
    });
}

module.exports = {
    createAccessToken,
}