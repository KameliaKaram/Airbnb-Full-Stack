const express = require ('express')
const router = express.Router()
const Users = require ('../models/users')

router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/signup', (req, res) => {
    res.render('signup')
})

router.post('/login',async (req, res, next) => {
    let foundaccount= await Users.findOne({
        email: req.body.email,
        password: req.body.password
    })
    try {
        if (foundaccount) {
            req.login(foundaccount, (err) => {
                if (err) {
                    throw error
                }
                res.redirect('/houses')
            })
        } else {
            throw new Error ('Email or Password is wrong')
        }
    } catch (err) {
        next (err)
    }
})

router.post('/signup', async(req, res, next) => {
    let founduser= await Users.findOne({
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

router.get('/logout', (req, res) => {
    req.logout()
    req.session.destroy(err => {
      if (err) {
        next(err)
      }
      res.clearCookie('connect.sid')
      res.redirect('/auth/login')
    })
 })

module.exports = router