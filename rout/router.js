var optFile = require('./../modules/optfile');

function getRecall(req,res){
	res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
	function recall(data){//回调data
		res.write(data);
		res.end('');//协议尾,不写则没有http协议尾
	}
	return recall;//返回闭包
}

module.exports = {
	login:function(req,res) {
		recall = getRecall(req,res);
		/*function recall(data){//回调data
			res.write(data);
			res.end('ok');//协议尾,不写则没有http协议尾
		}*/
		optFile.readfile('./../views/login.html',recall);
	},
	register:function(req,res) {
		recall = getRecall(req,res);
		/*function recall(data){//回调data
			res.write(data);
			res.end('ok');//协议尾,不写则没有http协议尾
		}*/
		optFile.readfile('./../views/register.html',recall);
	},
	writefile:function(req,res){
		function recall(data){//回调data
			res.write(data);
			res.end('ok');//协议尾,不写则没有http协议尾
		}
		optFile.writefile('./../views/one.txt','我的写入文件',recall);
	},
	showimg:function(req,res){
		res.writeHead(200,{'Content-Type':'image/jpeg'});/*读取图片格式*/
		optFile.readImg('./../imgs/roger.png',res);/*图片路径*/
	}
}