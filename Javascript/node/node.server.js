var http = require('http'); // http라는 모듈(오브젝트)을 호출

http.createServer(function(request, response){ // function이 파라메터에 들어오면 익명함수: 준비만 함
	response.writeHead(200, {'Content-Type': 'text/html'})
	response.end('<h1>Hello server</h1>');
}).listen(3000, function() {
	console.log('Server running at http://127.0.0.1:3000'); 
});

