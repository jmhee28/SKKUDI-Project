const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser= require('body-parser')


mongoose
.connect(
'mongodb://mongo:27017/docker-node-mongo',
{ useNewUrlParser: true }
)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));


// body-parser
app.use(bodyParser.urlencoded({ extended: true }))


// crud handlers
// sendFile method를 통해 index.html파일로 연결하자
app.get('/', (req, res) => {
        res.sendFile(__dirname + '/templates/index.html')
})

app.post('/quotes', (req, res) => {
        console.log(req.body)
})