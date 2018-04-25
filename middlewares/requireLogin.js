module.exports = (req, res, next) => {
    if (!req.user) {
        returnres.status(401).send({error: 'You must log in !'})
    }
    
    next();
}