const http = require('http'); // 변수명은 자유롭게 지어도 됨, 경로가 없으면 글로벌 모듈 갖고옴
const routes = require('./routes');

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(3000);