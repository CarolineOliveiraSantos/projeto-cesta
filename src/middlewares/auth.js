const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const authConfig = require("../config/auth");

module.exports = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).json({error : "Erro no token"});
    }
    const[, token] = authHeader.split(" ");
    try{
        const decored = await promisify(jwt.verify)(token, authConfig.secret);
        req.userId = decored.id;
        return next();
    }catch(errorr){
        return res.status(401).json({errorr: "Token inválido."});
    }
};