const connection = require("../config/connection.js");

/* * * * * * * * * * * * * * * * * * * * * 
├── config
   ├── connection.js ╗
   └── orm.js <══════╝
* * * * * * * * * * * * * * * * * * * * */

// function questionForEachColVal(num) {
//     var arr = [];
//     for(var i = 0; i < num; i++) {
//         arr.push(`?`);
//     }
//     console.log(`Arr: ${arr}`)
//     return arr.toString();
// }

// function objToSql(ob) {
//     var arr = [];

//     for (var key in ob) {
//         var value = ob[key];

//         // Object.hasOwnProperty.call() checks if an object's property belongs to specified object
//         if(Object.hasOwnProperty.call(ob, key)) {
//             if(typeof value === `string` && value.indexOf(" ") >= 0) {
//                 value = `\'${value}\'`; 
//                 console.log(value);
//                 console.log(typeof value);
//             }
//             console.log(`${key}=${value}`);
//             arr.push(`${key}=${value}`);
//         }
//     }
//     return arr.toString();
// }

var orm = {
    selectAll: function(table, callback) {
        var query = `SELECT * FROM ${table};`;
        // console.log(`\nselectAll() query: ${query}\n`);
        connection.query(query, function(err, result) {
            if (err) throw err;
            callback(result);
        });
    },
    insertOne: function(table, burgerObj, callback) {
        // burgerObj.devoured = false;
        // console.log(burgerObj);
        // var query = `INSERT INTO burgers SET burger_name='burgerburger', devoured= false`;
        var query = `INSERT INTO ${table} SET burger_name='${burgerObj.burger_name}', devoured=${burgerObj.devoured}`;
        console.log(`\ninsertOne() query: ${query}\n`);
        connection.query(query, function(err, result) {
            if (err) throw err;
            callback(result);
        });
    },
    updateOne: function(table, id, callback) {
        var query = `UPDATE ${table} SET devoured = true WHERE ${id};`;
        // UPDATE burgers SET devoured = true WHERE id=4;
        console.log(`\nupdateOne() query: ${query}\n`);
        connection.query(query, function(err, result) {
            if (err) throw err;
            callback(result);
        });
    }
};

module.exports = orm;


