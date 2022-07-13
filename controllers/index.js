const express = require ('express')
const router = express.Router()

router.get ('/', (req, res) => {
res.redirect('/houses', {
    user: req.user
})
})

module.exports = router