const mysql = require(`mysql`);

console.log(`\n\nConsole-logging "process.env.JAWSDB_URL":\n\n${process.env.JAWSDB_URL}\n`);
if(process.env.JAWSDB_URL) {
    var connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    var connection = mysql.createConnection({
        host: `localhost`,
        port: 3306, 
        user: `root`,
        password: ``,
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