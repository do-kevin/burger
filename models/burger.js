const orm = require(`../config/orm.js`);

/* * * * * * * * * * * * * * * * * * * * * 
├── config
│   ├── connection.js 
│   └── orm.js ══════════╗
├── models               ║
    └── burger.js <══════╝
* * * * * * * * * * * * * * * * * * * * */

var burger = {
    selectAll: function(callback) {
        orm.selectAll(`burgers`, function(res) {
            callback(res);
        });
    },
    insertOne: function(cols, vals, callback) {
        orm.insertOne(`burgers`, cols, vals, function(res) {
            callback(res);
        });
    },
    updateOne: function(objColVals, condition, callback) {
        orm.updateOne(`burgers`, objColVals, condition, function(res) {
            callback(res);
        });
    }
};

module.exports = burger;