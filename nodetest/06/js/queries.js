let connection = require('./config');
let mssql = require('mssql');

module.exports = {
    tableRows: '',
    getAllItems: function (req, res) {
        let self = this;
        self.tableRows = '';
        let request = new mssql.Request(connection);
        request.stream = true;

        request.query('SELECT * FROM todo');
        request.on('row', function (row) {
            self.tableRows += `<tr><td>${row.name}</td><td>${row.description}</td><td>${row.completed?'yes':'no'}</td>
            </tr>`
        })
        request.on('done', function () {
            res.render('index', {
                data: self.tableRows
            });
        })
        request.on('error', function (err) {
            if (err)
                console.log(err);
        })
    },
    insertItem: function (data, req, res) {
        let inserts = {
            name: data.name,
            description: data.description,
            completed: parseInt(data.completed)
        }
        let ps = new mssql.PreparedStatement(connection);
        ps.input('name', mssql.Text);
        ps.input('description', mssql.Text);
        ps.input('completed', mssql.Int);
        ps.prepare("INSERT INTO todo (name,description,completed) VALUES (@name, @description, @completed)",function(err){
            if (err) console.log(err);
            ps.execute(inserts,function(err,data){
                if (err) console.log(err);
                
                console.log('item add');
                ps.unprepare();
            })
        })
    }
}