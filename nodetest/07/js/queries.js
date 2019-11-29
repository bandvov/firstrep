let mssql = require('mssql');
let connection = require('./config');



module.exports = {
    tableRows: '',
    getAllItems: function (req, res) {
        let self = this;
        self.tableRows = '';
        let request = new mssql.Request(connection);
        request.stream = true;
        request.query('SELECT * FROM todo');
        request.on('row', function (row) {
            console.log(row);


            if (req.url == '/') {

                self.tableRows += `<tr> 
                <td>${row.name}</td>    
                <td>${row.description}</td>
                <td>${row.completed?'yes':'no'}</td>
                </tr>`
            } else {
                self.tableRows += `<tr> 
                <td><span class="glyph-pencil edit" id=${row.id}>&nbsp;</span>		<span class="glyphicon glyphicon-remove delete" style="cursor: pointer" 
                id="${row.id}"> &nbsp; </span>${row.name}</td>    
                <td>${row.description}</td>
                <td>${row.completed?'yes':'no'}</td>
                </tr>`

            }
        })
        request.on('done', function () {
            if (req.url == '/') {
                let options = {
                    edit: false
                }
            } else {
                let options = {
                    edit: true
                }
            }

            if (req.url == '/') {
                res.render('index', {
                    data: self.tableRows,
                    buttons: false
                });
            } else {
                res.render('index', {
                    data: self.tableRows,
                    buttons: true
                });
            }
        })
    },
    insertItem: function (req, res) {

        let inserts = {
            name: req.body.name,
            description: req.body.description,
            completed: req.body.completed
        }
        console.log(inserts);

        let ps = new mssql.PreparedStatement(connection);
        ps.input('name', mssql.VarChar);
        ps.input('description', mssql.VarChar);
        ps.input('completed', mssql.Int);

        ps.prepare('INSERT INTO todo (name,description,completed) VALUES (@name,@description,@completed)', function (err) {
            console.log(err);
            ps.execute(inserts, function (err) {
                if (err) {
                    console.log(err);

                }
                console.log('new row add');
                ps.unprepare();
            })
        })

    },
    loadItemById: function (req, res) {
        let inserts = {
            id: parseInt(req.params.id)
        }

        let ps = new mssql.PreparedStatement(connection);
        ps.input('id', mssql.Int);

        ps.prepare("SELECT * FROM todo WHERE id=@id", function (err) {
            if (err) console.log(err);
            ps.execute(inserts, function (err, rows) {

                if (err) console.log(err);
                console.log('get item by id');


                res.render('edit_item_page', {
                    id: rows.recordset[0].id,
                    name: rows.recordset[0].name,
                    description: rows.recordset[0].description,
                    completed: rows.recordset[0].completed
                });

                ps.unprepare();
            })
        });

    },
    updateItem: function (req, res) {
        let inserts = {
            id: parseInt(req.body.id),
            name: req.body.name,
            description: req.body.description,
            completed: req.body.completed
        }
        let ps = new mssql.PreparedStatement(connection);
        ps.input('id', mssql.Int);
        ps.input('name', mssql.VarChar);
        ps.input('description', mssql.VarChar);
        ps.input('completed', mssql.Int);
        ps.prepare('UPDATE todo SET name=@name, description=@description,completed=@completed WHERE id=@id', function (err) {
            if (err) {
                console.log(err);
            } else {
                ps.execute(inserts, function (err, rows) {
                    if (err)
                        console.log(err);


                    ps.unprepare();
                    console.log('item updated');
                })
            }

        })
    },
    deleteItem: function (req, res) {
        let self = this;
        let inserts = {
            id:parseInt(req.params.id)
        }
        let ps = new mssql.PreparedStatement(connection);
        ps.input('id',mssql.Int);
        prepare('DELETE  FROM todo WHERE id=@id',function(err){
            if (err) console.log(err);
            ps.execute(inserts,function(err){
                if (err) console.log(err);                
                ps.unprepare();
                res.send('ok');
            })
        })
    }
}