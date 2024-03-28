
const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (token) {
        try {
            const decoded = jwt.verify(token, "masai");
            if (decoded) {
                next()
            } else {
                res.json({ msg: " user not authorized" })
            }

        } catch (err) {
            res.json({ msg: "not authorized" })
        }
    } else {
        res.json({ msg: "please Login !!" })
    }
}

module.exports = {
    auth
}