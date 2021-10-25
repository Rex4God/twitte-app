const { JWT_SECRETE_KEY, TOKEN_DURATION } = process.env;
const jwt = require('jsonwebtoken')

async function generateAuthToken(payload) {
    return jwt.sign(payload, JWT_SECRETE_KEY, {expiresIn: TOKEN_DURATION});
}

const authenticate = async (req, res, next) => {
    try {
        const jwtPayload = decodeJwtToken(req);
        req.token = jwtPayload.token;
        next();
    } catch (e) {
        return res.status(e.code || 400).json({
            status: 'failed',
            message: e.message,
        });
    }
}

function decodeJwtToken(req) {
    const {authorization} = req.headers;

    if (!authorization) {
        throw({message: 'Authentication Failed. Please login', code: 401});
    }

    const [authBearer, token] = authorization.split(' ');

    if (authBearer !== 'Bearer') {
        throw({message: 'Authentication Failed', code: 401});
    }

    const jwtPayload = verifyToken(token);

    jwtPayload.token = token;
    return jwtPayload;
}

function verifyToken(token) {
    return jwt.verify(token, JWT_SECRETE_KEY, { expiresIn: TOKEN_DURATION });
}

module.exports = {
    generateAuthToken,
    authenticate
}