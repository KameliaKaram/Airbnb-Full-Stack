const express = require ('express')
const router = express.Router()
const Users = require ('../models/users')

router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/signup', (req, res) => {
    res.render('signup')
})

router.post('/login', (req, res) => {
    res.render('login')
})

router.post('/signup', async(req, res) => {
    console.log('aaaaa')
    console.log(req.body)
    let user = await Users.create(req.body)
    req.login(user, (err) => {
        if (err) {throw error}
    })
res.redirect('/houses')
})

// router.get('/logout', (req, res) => {
//     req.logout()
//     // copy the logout stuff from portal
// })

module.exports = router