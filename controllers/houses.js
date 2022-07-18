const express = require ('express')
const router = express.Router()
const Houses= require ('../models/houses')

router.get ('/', async (req, res, next) => {
    try {
        let q = {
            location: req.query.location,
            price: {
                $lte: req.query.price
            },
            rooms: req.query.rooms,
            title: {$regex: req.query.searchterm, $options: 'i'}
        }
        if (req.query.location==undefined || req.query.location == "") {
            delete q.location
        }
        if (req.query.price ==undefined || req.query.price =="") {
            delete q.price
        }
        if (req.query.rooms== undefined || req.query.rooms =="") {
            delete q.rooms
        }
        if (req.query.searchterm == undefined || req.query.searchterm =="") {
            delete q.title
        }
        let houses= await Houses.find(q).sort('price')
    
        res.render('houses/list', {
            user: req.user, 
            houses: houses
        })
    } catch (err) {
        next (err)
    }
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

router.get ('/:id', async (req, res, next) => {
    try {
        let house= await Houses.findById(req.params.id).populate('host')
        res.render('houses/one', {user: req.user, house})
    } catch (err) {
        next (err)
    }
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