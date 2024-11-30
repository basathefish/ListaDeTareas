const jwt = require('jsonwebtoken');
const SECRET_KEY = 'secreto_para_token';

const verifyToken = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    }

    const tokenWithoutBearer = token.startsWith('Bearer ') ? token.slice(7) : token;

    jwt.verify(tokenWithoutBearer, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Invalid or expired token' });
        }
        req.user = decoded;
        next();
    });
};

module.exports = { verifyToken, SECRET_KEY };
