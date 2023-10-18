const jwt = require('jsonwebtoken');

async function authRequired(request, response, next){
    try {
        const { token } = request.cookies;
        if(!token) return response.status(401).json({message: 'Unauthorized'});
        jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
            if(err) return response.status(403).json({message: 'Invalid token'});
            request.user = user;
            next();        
        });
    } catch (error) {
        return response.status(500).json({message: error.message});
    }
}

module.exports = {
    authRequired,
}