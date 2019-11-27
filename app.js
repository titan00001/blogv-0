// setup
var express = require('express');
var app = express();
var path = require('path');
const bodyParser = require('body-parser');
const ejs = require('ejs');


app.use(bodyParser.urlencoded({extended : true}));

let blogPost = [];

// ejs view engine

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// routes
app.get('/', (req,res) => {
    res.render('index', {blogs: blogPost});
})


app.post('/addpost', function(req, res) {

    let blog = req.body;
    blogPost.push(blog);

    res.redirect('/');
})

// listen
app.listen(3000, () => {
    console.log('Server listing on 3000');
})


