let queries = require('./queries');

module.exports = {
    displayAllItems: function(req,res){
        queries.getAllItems(req,res);
    }
}