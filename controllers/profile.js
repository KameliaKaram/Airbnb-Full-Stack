const express = require ('express')
const router = express.Router()

router.get ('/', (req, res) => {
    res.send('hello from profile')
})

router.patch ('/', (req, res) => {
    res.send('hello from profile')
})

module.exports = router