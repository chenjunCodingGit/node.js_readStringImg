var fs = require('fs');//系统自带读取文件方法

module.exports = {
	readfileSync:function (path) {   //同步读取(不推荐)
		// body...
		var data = fs.readFileSync(path,'utf-8');
		console.log(data);
		console.log('同步方法执行完毕');
		//return data;
	},
	readfile:function(path,recall){   //异步执行(推荐)
		fs.readFile(path,function(err,data){
			if(err){
				console.log(err);
			}else{
				console.log(data.toString());
				console.log('异步方法执行完毕');
				recall(data);//回调，得到数据data
			}
		});
		console.log('不在异步方法执行完毕');//不在异步方法里面
	},
	writefile:function(path,data,recall){  //异步写文件
		fs.writeFile(path,data,function(err){
			if(err){
				throw err;//抛出异常
			}
			console.log('It is saved!');//文件被保存
			recall('写文件成功');
		});
	},
	readImg:function(path,res){  //读图片
		fs.readFile(path,'binary',function(err,filedata){  //读图片只能是二进制，中间不能有字符串，所以第二个参数不为String，为binary
			if(err){
				console.log(err);
				return;
			}else{
				res.write(filedata,'binary');
				res.end();
			}
		});
	},
	writeFileSync:function(path,data){  //同步写文件
		fs.writeFileSync(path,data);
		console.log('同步写文件完成');
	}
}