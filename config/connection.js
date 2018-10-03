const mysql = require(`mysql`);
var connection;

console.log(`\n\nConsole-logging "process.env.JAWSDB_URL":\n\n${process.env.JAWSDB_URL}\n`);
if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: `localhost`,
        port: 3306, 
        user: `root`,
        password: null,
        database: `burgers_db`
    });
};

connection.connect((err) => {
    if (err) {
        console.error(`Error connecting ${err.stack}`);
        return;
    };
    console.log(`Connected as id ${connection.threadId}`);
});

module.exports = connection;