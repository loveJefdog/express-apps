
var express = require('express');
var ejs = require('ejs');

var app = express();

app.engine('ejs',ejs.renderFile);

app.use(express.static('public'));

//indexページの作成
app.get('/',(req,res)=>{
    //index.ejsをレンダリングする
    res.render('index.ejs',
                {title:'Index',
                content:'This is Express-app Top page with style.css !',
                link:{href:'/other',text:'*別のページに移動'}
            });
});

//otherページの作成
app.get('/other',(req,res)=>{
    res.render('index.ejs',{
        title:'other',
        content:'This is other page with style.css',
        link:{href:'/',text:'*トップページに移動'}
    })
});

app.listen(8000,()=>{
    console.log('Start server port:8000');
});