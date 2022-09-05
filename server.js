const express = require('express');
const app = express();
const bodyParser= require('body-parser')

// server와 browser가 연결될때까지 기다리는 것
app.listen(3000, function() {
        console.log('listening on 3000')
})


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