const express = require('express');
const morgan = require('morgan');
const app = express();
const {addPage, editPage, layout, main, userList, userPages, wikipage} = require('./views');
const {db, Page, User} = require('./models');
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/users');


app.use(morgan('dev'));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({extended : false}));

db.authenticate().then(() => {
    console.log('connected to the database');
})

app.use('/wiki', wikiRouter);
//app.use('/users', userRouter);
app.get('/', (req, res) => {
    res.redirect('/wiki');
})

const init = async() => {
    // await Page.sync();
    // await User.sync();
    await db.sync({force: true});
    const PORT = 1337;
    app.listen(PORT, ()=> {
    console.log(`Server is listening on port ${PORT}!`)
})
}
init();

// const PORT = 1337;
// app.listen(PORT, ()=> {
//     console.log(`Server is listening on port ${PORT}!`)
// })