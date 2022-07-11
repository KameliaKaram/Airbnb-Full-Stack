const express = require ('express')
const router = express.Router()

router.get ('/', (req, res) => {
res.send('hello from auth')
})

router.get('/login', (req, res) => {
    res.send('hello from login')
})

router.get('/signup', (req, res) => {
    res.send('hello from signup')
})

router.post('/login', (req, res) => {
    res.send('hello from login')
})

router.post('/signup', (req, res) => {
    res.send('hello from signup')
})

router.get('/logout', (req, res) => {
    res.send('hello from logout')
})

module.exports = router