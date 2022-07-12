const express = require ('express')
const router = express.Router()

router.get ('/', (req, res) => {
    if (req.isAuthenticated()) {
        res.render('profile')
    } else {
        res.redirect('/auth/login')
    }
})

router.patch ('/', (req, res) => {
    if (req.isAuthenticated()) {
        res.redirect('/profile')
    } else {
        res.redirect('/auth/login')
    }
})

module.exports = router