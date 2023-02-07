const http = require('http'); // 변수명은 자유롭게 지어도 됨, 경로가 없으면 글로벌 모듈 갖고옴

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
});

server.listen(3000);