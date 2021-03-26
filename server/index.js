const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(cors());

app.use(function (req, res, next) {

      let origin = req.headers.origin;

      // Website you wish to allow to
      if (origin == "https://objective-edison-b84da7.netlify.app" || origin == "https://mg-blog-app.herokuapp.com") {
        res.setHeader("Access-Control-Allow-Origin", origin);
    }

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

const connection = mysql.createPool({
    host: 'eu-cdbr-west-03.cleardb.net',
    user: 'b3f98e19f59f62',
    password: '722b524d',
    database: 'heroku_16a4f1d08577e9c'
});

app.get('/api/blogs', (req, res) => {
	connection.query('SELECT * FROM blogs', (err, result) => {
        if (err) throw err;
        res.send(result);
    })
});

app.get('/api/categories', (req, res) => {
	connection.query('SELECT * FROM categories', (err, result) => {
        if (err) throw err;
        res.send(result);
    })
});

app.get('/api/blogs/:id', (req, res) => {
    let id = parseInt(req.params.id);
	connection.query('SELECT * FROM blogs WHERE id=' + id , (err, result) => {
        if (err) throw err;
        res.send(result[0]);
    })
});

app.post('/api/blogs', (req, res) =>{

    let img = req.body.img;
    let title = req.body.title;
    let body = req.body.body;
    let category = req.body.category;

    connection.query('INSERT INTO blogs (title, body, category, img) VALUES (?,?,?,?)', [title, body, category, img], (err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

app.put('/api/blogs/:id', (req, res) => {
    let id = parseInt(req.params.id);
    connection.query('SELECT (score) FROM blogs WHERE id=' + id , (err, result) => {
        if (err) throw err;
        connection.query('UPDATE blogs SET score=' + (result[0].score+1) + ' WHERE id=' + id,
        (err, result) => {
            if (err) throw err;
            connection.query('SELECT (score) FROM blogs WHERE id=' + id , (err, result) => {
                if (err) throw err;
                res.send(result);
            })
        })
    })
});

app.delete('/api/blogs/:id', (req, res) => {
    let id = parseInt(req.params.id);
    connection.query('DELETE FROM blogs WHERE id=' + id , (err, result) => {
        if (err) throw err;
        res.send(result);
    })
})


app.listen(port, () => console.log(`Server is running on port ${port}.`));