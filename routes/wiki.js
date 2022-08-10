let router = require('express').Router();
const {Page, User} = require('../models');

const {addPage, editPage, layout, main, userList, userPages, wikipage} = require('../views');


router.get('/', (req, res) => {
    res.send('got to GET /wiki/')
})
router.post('/', async (req, res, next) => {
    try{
        const page = await Page.create({
            title: req.body.title,
            content: req.body.content
        })
        res.redirect('/');
    }

    catch(error) {next(error)}
})

router.get('/add', (req, res) => {
    res.send(addPage())
})

module.exports = router;