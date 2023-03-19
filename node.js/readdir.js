var testFolder='./data'; //노드는 특정 dir목록을 배열 형태로 가지고 있음
var fs = require('fs');

fs.readdir(testFolder, function(error, filelist){
    console.log(filelist);
})