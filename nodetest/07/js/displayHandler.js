let queries = require('./queries');

module.exports= {
    displayAllItems:function(req,res){
      return  queries.getAllItems(req,res);
    }
}
