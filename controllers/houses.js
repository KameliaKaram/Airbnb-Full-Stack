const express = require ('express')
const router = express.Router()
const Houses= require ('../models/houses')

router.get ('/', (req, res) => {
    res.render('houses/list', {
        user: req.user
    })
})

router.get ('/create', (req, res) => {
    if (req.isAuthenticated()) {
        res.render('houses/create', {
            user: req.user
        })
    } else {
        res.redirect('/auth/login')
    }
})

router.get ('/:id', async (req, res) => {
    let house= await Houses.findById(req.params.id).populate('host')
    res.render('houses/one', {user: req.user, house})
})

router.get ('/:id/edit', (req, res) => {
    if (req.isAuthenticated()) {
        res.render('houses/edit', {
            user: req.user
        })
    } else {
        res.redirect('/auth/login')
    }
})

router.post('/', async (req, res, next) => {
    try {
        if (req.isAuthenticated()) {
    req.body.host=req.user._id
    let house = await Houses.create(req.body)
        if (house) {
            res.redirect(`/houses/${house._id}`)
        } else {
            throw new Error ('incorrect')
        }
    } else{
     res.redirect('/auth/login')
    } 
    } catch (err) {
        next (err)
    }
})

router.patch('/:id', (req, res) => {
    if (req.isAuthenticated()) {
        res.send('hello from houses')
    } else {
        res.redirect('/auth/login')
    }
})

router.delete('/:id', (req, res) => {
    if (req.isAuthenticated()) {
        res.send('hello from houses')
    } else {
        res.redirect('/auth/login')
    }
})

module.exports = router