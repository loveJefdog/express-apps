
var express = require('express');
var router = express.Router();

router.get('/',(req,res,next)=>{
    var msg = '＊何か書いてください'
   // var name = req.query.name;
   // var mail = req.query.mail;

   if(req.session.hoge != undefined){
       msg ='Last message:'+req.session.hoge;
   }

    var data = {
        title:'Hello!',
        content:msg,
    };
    res.render('hello',data);
});

router.post('/post',(req,res,next)=>{
    var msg = req.body['message'];
    req.session.hoge = msg;
    var data = {
        title:'Hello!',
        content:'Last message:'+req.session.hoge,
    };
    res.render('hello',data);

});

module.exports = router;