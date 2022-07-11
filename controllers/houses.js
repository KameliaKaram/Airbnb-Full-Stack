const express = require ('express')
const router = express.Router()

router.get ('/', (req, res) => {
    res.send('hello from houses')
})

router.get ('/create', (req, res) => {
    res.send('hello from create')
})

router.get ('/:id', (req, res) => {
    res.send('hello from Id')
})

router.get ('/:id/edit', (req, res) => {
    res.send('hello from Id edit')
})

router.post('/', (req, res) => {
    res.send('hello from houses')
})

router.patch('/:id', (req, res) => {
    res.send('hello from houses')
})

router.delete('/:id', (req, res) => {
    res.send('hello from houses')
})

module.exports = router