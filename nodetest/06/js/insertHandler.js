let queries = require('./queries');
let path = require('path');

module.exports = {
    loadAddPage:function(req,res){
        res.render(path.join(__dirname,'../pages/add_load_page'));
    },
    addRow:function(req,res){
    queries.insertItem(req.body,req,res);
    }
}