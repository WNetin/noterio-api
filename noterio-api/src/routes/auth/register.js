const router = require("express").Router();

router.get('/register', (req, res) => {
    res.send('Welcome')
})

module.exports = router