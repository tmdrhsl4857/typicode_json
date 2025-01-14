/* const express = require('express');
const fs = require('fs'); // 파일 시스템 모듈
const path = require('path'); // 파일 경로 조작 모듈

const app = express();
const port = 8848;
const filePath = path.join(__dirname, 'db.json');

app.use(express.static('public'));

app.get('/', (req, res) => {
    const data = fs.readFileSync(filePath, 'utf8');
    jsonData = JSON.parse(data).chara.slice();
    console.log(jsonData)
    res.sendFile(__dirname + "/" + "index.html");
})

app.get('/getbday/:Id', (req, res) => {
    console.log(jsonData);
    const uid = req.params.Id
    var snad = jsonData.find(i => i.id === uid);
    res.send(snad);
    res.send(JSON.stringify(req));
})

app.listen(port, () => {
    console.log(`서버가 실행됩니다. http://localhost:${port}`);
}); */