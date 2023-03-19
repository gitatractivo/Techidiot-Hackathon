const jwt = require('jsonwebtoken');

const JWT_SECRET = 'mental';


const fetchTherapist = (req, res, next) => {
    const authHeader = req.get('Authorization');
    if (!authHeader) {
        return res.status(401).json({ message: 'Not authenticated' });
    }
    const token = authHeader.split(' ')[1];
    let decodedToken;
    try {
        decodedToken = jwt.verify(token, JWT_SECRET);
    } catch (err) {
        return res.status(401).json({ message: 'Not authenticated' });
    }
    if (!decodedToken) {
        return res.status(401).json({ message: 'Not authenticated' });
    }
    req.therapist = decodedToken.therapist;
    next();
};

module.exports = fetchTherapist;
