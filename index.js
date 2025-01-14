const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('생일 출력하기');
    res.sendfile(__dirname + "/" + "index.html");
});

app.listen(port, () => {
    console.log(`서버가 실행됩니다. http://localhost:${port}`);
});