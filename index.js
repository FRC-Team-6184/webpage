
const express = require('express');
const path = require('path');
const app = express();


//app.use(express.static(path.join(__dirname,'public')));
//app.get('/',function(req,res){
//      res.send('<h1>test</h1>');
//}
app.get('/',function(req,res){

res.render('home.html',(err,home)=>{
res.send(home);
})
});

app.listen(5000, () => console.log('startd'));


