const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendfile(__dirname + "/" + "index.html");
})

app.get('/bday', (req, res) => {
    const number = parseInt(req.query.number, 10); // 쿼리 스트링에서 number 값 가져오기
  
    if (isNaN(number)) {
      return res.send('번호를 입력해주세요.');
    }
  
    const filePath = path.join(__dirname, 'db.json');
  
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error('파일 읽기 에러:', err);
        return res.status(500).send('서버 에러');
      }
  
      const jsonData = JSON.parse(data);
      const character = jsonData.character.find((item) => item.id === number);
  
      if (character) {
        // 이름과 생년월일 반환
        res.send(`${character.name}의 생일은 ${character.month}월 ${character.day}일입니다.`);
      } else {
        // 해당 번호가 없는 경우
        res.send('해당 번호의 데이터를 찾을 수 없습니다.');
      }
    });
  });

app.listen(port, () => {
    console.log(`서버가 실행됩니다. http://localhost:${port}`);
});