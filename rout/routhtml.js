var http = require('http');
var url = require('url');
var router = require('./router');

var server = http.createServer(function (req,res) {
	//res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});//有协议头，就有协议尾
	if(req.url!='/favicon.ico'){//清除2次访问
		var pathname = url.parse(req.url).pathname;//得到url地址,/代表根目录（也就是除listen里的）
		pathname = pathname.replace(/\//,'');//去掉开头的   /(根目录)
		router[pathname](req,res);
	}

});
server.listen(1337,'127.0.0.1');
console.log('Server running at http://127.0.0.1/1337');