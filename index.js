const express = require('express');
const start = express();
const port = 3000;

start.get('/', (req, res) => {
    res.send('Hello, World!');
});

start.get('/example', (req, res, next) => {
    console.log("첫 번째 콜백 함수");
    next();
}, (req, res) => {
    res.send('두 번째 콜백 함수');
});

start.listen(port, () => {
    console.log(`서버가 실행됩니다. http://localhost:${port}`);
});