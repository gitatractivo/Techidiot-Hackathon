const jwt = require('jsonwebtoken');

const JWT_SECRET = 'mental';


const fetchUser = (req, res, next) => {
    console.log(req)

    const token = req.body.token;
    let decodedToken;
    try {
        decodedToken = jwt.verify(token, JWT_SECRET);
    } catch (err) {
        console.log(first)
        return res.status(401).json({ message: 'Not authenticated' });
    }
    if (!decodedToken) {
        return res.status(401).json({ message: 'Not authenticated' });
    }
    req.params.user = decodedToken.user;
    next();
};

module.exports = fetchUser;
