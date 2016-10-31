var http = require('http');
var optFile = require('./../modules/optfile');
var server = http.createServer(function (req,res) {
	res.writeHead(200,{'Content-Type':'image/jpeg'});/*读取图片格式*/
	if(req.url!=='/favicon.ico'){
		//这里不能传字符串
		optFile.readImg('./../imgs/roger.png',res);/*图片路径*/
	}
});
server.listen(1337,'127.0.0.1');
console.log('Server running at http://127.0.0.1/1337');