var express = require('express');
var router = express.Router();
var memoJson = require('../memo.json');
let count = 2;

router.get('/', function(req, res, next) {
    res.send(memoJson);
});

router.post('/', function(req,res,next) {
    const memo = req.body.data;
    const memoData = {
        id : ++count,
        title : memo.title,
        memo : memo.memo,
        writer : memo.writer
    }
    memoJson.push(memoData);
});

router.get('/:id', function(req,res,next) {
    const id = req.params.id;

    const select = memoJson.filter((memo)=>{ if(memo.id == id) { return true } });
    res.send(select[0]);
})

module.exports = router;