const express = require ('express')
const router = express.Router()

router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/signup', (req, res) => {
    res.render('signup')
})

router.post('/login', (req, res) => {
    res.render('login')
})

router.post('/signup', (req, res) => {
    res.render('signup')
})

router.get('/logout', (req, res) => {
    res.send('hello from logout')
})

module.exports = router