function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.status(401).json({ message: 'Unauthorized! you need to login first ' }); // Send a 401 status for unauthorized access
    }
}

export { ensureAuthenticated };
