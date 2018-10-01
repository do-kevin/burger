const express = require(`express`);
const burger = require(`../models/burger.js`);

/* * * * * * * * * * * * * * * * * * * * * 
├── config
│   ├── connection.js 
│   └── orm.js 
├── models               
│   └── burger.js ═════════════╗
├── controllers                ║
   └── burgers_controller.js <═╝
* * * * * * * * * * * * * * * * * * * * */

var router = express.Router();

router.get(`/`, function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burger: data
        }
        // console.log(hbsObject);
        res.render(`index`, hbsObject);
    });
});

router.post(`/api/burgers`, function (req, res) {
    burger.insertOne(
        [
            `burger_name`, `devoured`
        ],
        [
            req.body.burger_name, req.body.devoured
        ],
        function (result) {
            res.json({
                id: result.insertId
            });
        }
    );
});

router.put(`/api/burgers/:id`, function (req, res) {
    var condition = `id = ${req.params.id}`;
    console.log(`condition`, condition)
    burger.updateOne({
        // objColVals
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows === 0) {
            return res.status(400).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;