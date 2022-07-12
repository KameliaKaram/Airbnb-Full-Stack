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

router.post('/signup', async(req, res, next) => {
    //
    let founduser= Users.findOne({
        email: req.body.email
    })
    try {
        if (founduser) {
            throw new Error('Account already exists')
        } else {
            let user = await Users.create(req.body)
            req.login(user, (err) => {
                if (err) {throw error}
                res.redirect('/houses')
            })
        }
    } catch (err) {
        next (err)
    } 
})

// router.get('/logout', (req, res) => {
//     req.logout()
//     // check logout code from portal
// })

module.exports = router