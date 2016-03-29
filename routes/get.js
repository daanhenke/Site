var express = require('express');
var router = express.Router();

router.get('/page/:id', function(req, res, next) {
    var data = JSON.parse(require('fs').readFileSync(__dirname + '/../data/pages.json', 'utf8'));
    if (data.hasOwnProperty(req.params.id)) {
        res.json(data[req.params.id])
    } else {
        res.json({})
    }
});

module.exports = router;