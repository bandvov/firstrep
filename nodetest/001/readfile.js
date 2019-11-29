let evt = require('events');

function ReadFile() {
    this.file='';
}
ReadFile.prototype= new evt.EventEmitter();
ReadFile.prototype.readDataFromFile = function(path,callback) {
this.file =path;    
if (typeof(callback)=='function') {
    this.on('readData',callback);
}
this._read();
}
ReadFile.prototype._read = function() {
    console.log('loading...');
    let someDataFromFile = 'text text text';
    console.log('data was read');
    this.emit('readData',someDataFromFile);
}

module.exports.Reader = ReadFile;