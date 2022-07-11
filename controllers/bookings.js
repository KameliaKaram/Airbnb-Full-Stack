const express = require ('express')
const router = express.Router()

router.post('/', (req, res) => {
res.send('hello from bookings')
})

module.exports = router