const connection = require("../config/connection.js");

/* * * * * * * * * * * * * * * * * * * * * 
├── config
   ├── connection.js ╗
   └── orm.js <══════╝
* * * * * * * * * * * * * * * * * * * * */

function questionForEachColVal(num) {
    var arr = [];
    for(let i = 0; i < num; i++) {
        arr.push(`?`);
    }
    return arr.toString();
}

function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];

        // Object.hasOwnProperty.call() checks if an object's property belongs to specified object
        if(Object.hasOwnProperty.call(ob, key)) {
            if(typeof value === `string` && value.indexOf(" ") >= 0) {
                value = `\'${value}\'`; 
            }
            arr.push(`${key}=${value}`);
        }
    }
    return arr.toString();
}

var orm = {
    selectAll: function(table, callback) {
        var query = `SELECT * FROM ${table};`;
        connection.query(query, function(err, result) {
            if (err) throw err;
            callback(result);
        });
    },
    insertOne: function(table, col, vals, callback) {
        var query = `INSERT INTO ${table} (${col.toString()}) VALUES (${questionForEachColVal(vals.length)});`;
        console.log(query);
        connection.query(query, function(err, result) {
            if (err) throw err;
            callback(result);
        });
    },
    updateOne: function(table, objColVals, condition, callback) {
        var query = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition};`;
        console.log(query);
        connection.query(query, function(err, result) {
            if (err) throw err;
            callback(result);
        });
    }
};

module.exports = orm;


