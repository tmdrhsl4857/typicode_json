const express = require('express');
const fs = require('fs'); // 파일 시스템 모듈
const path = require('path'); // 파일 경로 조작 모듈

const app = express();
const port = 8848;
const filePath = path.join(__dirname, 'db.json');

var jsonData;

fs.readFile(filePath, 'utf8', (err, data) => {
    jsonData = JSON.parse(data);
    console.log(jsonData);
});

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendfile(__dirname + "/" + "index.html");
})

app.get('/getbday/:Id', (req, res) => {
    const uid = req.params.Id
    var snad = jsonData.chara.find(i => i.id === uid);
    res.send(snad);
    res.send(JSON.stringify(req));
    console.log(snad);
})

app.listen(port, () => {
    console.log(`서버가 실행됩니다. http://localhost:${port}`);
});