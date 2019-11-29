let queries = require('./queries');
let path = require('path');

module.exports = {
    loadAddPage:function(req,res){
        res.render('../pages/add_new_item');
    },
    addRow:function(req,res) {
        queries.insertItem(req,res);
    }
}