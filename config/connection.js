const mysql = require(`mysql`);
var connection;

console.log(`\n\nConsole-logging "process.env.JAWSDB_URL":\n\n${process.env.JAWSDB_URL}\n`);
if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: `yhrz9vns005e0734.cbetxkdyhwsb.us-east-1.rds.amazonaws.com`,
        port: 3306, 
        user: `ogods59f73474huv`,
        password: `w75sabthjp3hcqht`,
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