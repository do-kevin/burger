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
    insertOne: function(burgerObj, callback) {
        orm.insertOne(`burgers`, burgerObj, function(res) {
            callback(res);
        });
    },
    updateOne: function(table, id, callback) {
        orm.updateOne(`burgers`, id, function(res) {
            callback(res);
        });
    }
};

module.exports = burger;