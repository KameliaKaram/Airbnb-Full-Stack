const express = require ('express')
const router = express.Router()

router.get ('/', (req, res) => {
    res.send('hello from reviews')
})

router.post ('/', (req, res) => {
    res.send('hello from reviews')
 })

module.exports = router