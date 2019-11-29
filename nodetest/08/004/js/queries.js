let mssql = require('mssql');
let pass_handler =require('./password_handler');
let connection = require('./dbHandler').createConnection();

module.exports= {
    currUser:'',
    getUsers:function(req,res){
        let request = new mssql.Request(connection);
        request.query('SELECT * FROM users',function(err,data){
            if (err) console.log(err);
            let result = data.recordset.map(elem => {
                return `<h3>${elem.username} : ${elem.password}</h3>`;
            });
            res.send(result.join(''));
        })
    },
    // =======================add user ==================
    addUser:function(req,res){
        let inserts = {
            username:req.body.username,
			password_hash: pass_handler.encrypt_pass(req.body.password)
        }
        let ps = new mssql.PreparedStatement(connection);

        ps.input('username',mssql.Text);
        ps.input('password_hash',mssql.Text);
        ps.prepare('INSERT INTO users (username, password) VALUES (@username, @password_hash)',function(err){
            if (err) console.log(err);
            ps.execute(inserts,function(err){
                console.log('user added');
                
                if (err) console.log(err);
                ps.unprepare();
                res.send(`user ${req.body.username} created`);
            })
        })
    },
    checkUser:function(req,res,next) {
        self = this;
        let inserts = {
            username:req.body.username
        }
        let ps = new mssql.PreparedStatement(connection);
        ps.input('username',mssql.Text);
        ps.prepare('SELECT * FROM users WHERE username LIKE @username',function(err){
            if (err) console.log(err);
            ps.execute(inserts,function(err,rows){
                console.log(rows.recordset);
                
                if (err) console.log(err);
                ps.unprepare();
                if (rows.recordset[0]) {
                    self.currUser = rows.recordset[0].username;
                    next();
                }else{
                    res.status(404).send('user not found');
                }
            })
        })
    },
    checkPass: function (req, res) { 
	
		var self = this; 
		var inserts = {
			password_hash: pass_handler.encrypt_pass(req.body.password) // хэширование пароля 
		}
	
		var ps = new mssql.PreparedStatement(connection); 
		
		ps.input('password_hash', mssql.Text); 
		
		ps.prepare('SELECT * FROM users WHERE password LIKE @password_hash', function(err) {
			if (err) console.log(err); 
			
			ps.execute(inserts, function(err, rows) {
				if (err) console.log(err); 
				
				ps.unprepare(); 
				// пароль верный 
				if (rows) {
					req.session.username = self.currUser; 
					res.status(200).send('user ' + req.session.username + ' logged in!'); 
					
				} 
				// пароль неверный 
				else {
					res.status(404).send('wrong password!'); 
				}
			})
		}); 


	}
}