
var express = require('express');
var ejs = require('ejs');

var app = express();

app.engine('ejs',ejs.renderFile);

app.use(express.static('public'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

//indexページの作成
app.get('/',(req,res)=>{
    //index.ejsをレンダリングする
    var msg = 'This is Index page! これはトップページです．メッセージを書いて送信してください';
    var url = '/other?name=taro&pass=yamada';
    res.render('index.ejs',
                {title:'Index',
                content:msg,
                link:{href:url,text:'*別のページに移動'}
            });
});

//post送信の処理
app.post('/',(req,res)=>{
    var msg = 'This is posted Page!あなたは「'+req.body.message+'」と送信しました．';
    var url = '/other?name=taro&pass=yamada';
    res.render('index.ejs',
    {
      title:'Posted',
      content:msg,  
      link:{href:url,text:'*別のページに移動'},
    });
});

//otherページの作成
app.get('/other',(req,res)=>{
    var name = req.query.name;
    var pass = req.query.pass;
    var msg = 'あなたの名前は「'+name+' 」パスワードは「'+pass+'」です．';
    res.render('index.ejs',{
        title:'other',
        content:msg,
        link:{href:'/',text:'*トップページに移動'}
    })
});

app.listen(8000,()=>{
    console.log('Start server port:8000');
});