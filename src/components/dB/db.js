let mysql = require('mysql');

let connection = mysql.createConnection({
    host: '137.45.220.40',
    user: 'dbConnect',
    password: 'CAS!DB2435',
    database: 'cas'
});

connection.connect(function(err) {
    if (err) {
        return console.error('error: ' + err.message);
    }

    console.log('Connected to the MySQL server.');
});

// let sql = 'SELECT Fname FROM students';
// connection.query(sql, (error, results, fields) => {
//     if (error) {
//         return console.error(error.message);
//     }
//     console.log(results);
// });

connection.query('SELECT * FROM students', (err,rows) => {
    if(err) throw err;

    console.log('Data received from Db:\n');
    console.log(rows);
});

connection.end();