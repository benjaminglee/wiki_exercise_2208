let router = require('express').Router();
const {Page, User} = require('../models');

const {addPage, editPage, layout, main, userList, userPages, wikiPage} = require('../views');
  
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

router.get('/:slug', async (req, res, next) => {
    try{
        const page = await Page.findOne({
            where: {
                slug: req.params.slug
            }
        });
        res.json(page).slug;

        console.log(pageobj);
        //res.send('hi')
        //res.send(wikiPage(page));
    }
    catch(error) {next (error)}
  });

module.exports = router;