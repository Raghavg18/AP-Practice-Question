function check(req, res, next) {
    const {user} = req.params
    const ac = user.split("_")
    if (ac[2] == 'WRITE') {
        return next()
    } 
    return res.status(403).json({ message: "Access Denied" });
}

module.exports = {check}