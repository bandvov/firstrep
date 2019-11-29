let mssql = require('mssql');
let connection = require('./dbHandler').createConnection();

module.exports = {
    getAllIMages: function(res){
        let request = new mssql.Request(connection);
        request.query('SELECT * FROM images',function(err,data){
            console.log(data.recordset);
            
            let images = data.recordset.map((img)=>{
                
              return `<img src="${img.src}" style="width:400px" >`;
            })
            let jsonImages = JSON.stringify(images);
            console.log(jsonImages);
            
            res.send(jsonImages);
        })
    },
    saveImages:function(path,res) {
        let inserts = {
            path:path
        }
        let ps = new mssql.PreparedStatement(connection);
        ps.input('path',mssql.Text);
        ps.prepare('INSERT INTO images (src) VALUES (@path)',function(err){
            if (err) console.log(err);
            ps.execute(inserts,function(err){
                if (err) console.log(err);
                console.log('img src added...');
                ps.unprepare();         
            })
        })
    }
}