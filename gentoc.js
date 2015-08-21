var fs=require("fs");
var lstfile=process.argv[2]||"jiangkangyur.lst"
var bom=String.fromCharCode(0xfeff);
var lst=fs.readFileSync("../jiangkangyur-master/"+lstfile,"utf8").replace(bom,'').split(/\r?\n/);
var lastdepth=0;
var pat1=/<head n="(\d+)">(.+?)<\/head>/g; // head text same with orginal text
var pat2=/<head n="(\d+)" t="(.+?)"/g;     // head text doesn't not match or not found in orginal text
var _fn="";
var doHead=function(m,m1,m2){
	var space="", depth=parseInt(m1);
	if (depth-lastdepth>1) {
		console.log("error depth, file",_fn,":",i+1);
	}
	lastdepth=depth;
	//while (--depth) space+="  ";
	console.log(m1,m2,_fn);
}
var parseFile=function(fn) {
	_fn=fn;
	var arr=fs.readFileSync("../jiangkangyur-master/"+fn,"utf8").split(/\r?\n/);		
	for (var i=0;i<arr.length;i++) {
		if (arr[i].indexOf("<head")==-1) continue;
		arr[i].replace(pat1,doHead);
		arr[i].replace(pat2,doHead);
	}
}
lst.map(parseFile);
