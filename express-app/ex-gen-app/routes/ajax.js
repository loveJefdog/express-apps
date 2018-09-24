var express = require('express');
var router = express.Router();

var data = [
    {name:'Taro',age:35,mail:'taro@google.com'},
    {name:'Hanako',age:31,mail:'hanako@yahoo.com'},
    {name:'Michiko',age:39,mail:'michiko@outlook.com'},
];

router.get('/',(req,res,next)=>{
    var n = req.query.id;//idはクライアント側からのクエリーリクエスト
    res.json(data[n]);
});

module.exports = router;