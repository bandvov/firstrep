// let func = require('./example');
let repl = require('repl');
let util = require('util');
let fs = require('fs');
let url=require('url');

// func.of();
// func.nf();
// repl.start();
// temp.getDt();
console.log(Buffer.byteLength('hello world', 'utf-8'));
console.log(Buffer.from('hello world', 'utf-8'));
let user = {
    fname: "Alex",
    lname: "Brin",
    age: 25,
    position: "developer"

}
console.log('writing file...');
fs.writeFile('text.json',util.format(`%j`,user),function(error){
    if (error) {
        console.log(error);        
    }
});
fs.readFile('text.json',{"encoding":"utf-8"},function(error,data){
    if (error){
        console.log(error);        
    }else{
let obj=JSON.parse(data);
console.log(obj.fname,obj.age);
    }
    console.log('file is written');    
});
fs.watch('text.json',function(event,filename){
console.log(`file %s event %s`,filename,event);    
});
let dataInfo= 'data from datainfo';
let writeStream = fs.createWriteStream('output.txt');
writeStream.write(dataInfo,'utf-8');
writeStream.end();
writeStream.on('finish',function(){
    console.log('writing completed ');
});

writeStream.on('error',function(error){
    console.log(error);
});
