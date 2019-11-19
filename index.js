const express = require('express');
var app = express();


app.use(express.static('streamingpage'));

app.get('/',function(req,res){
    res.sendFile( __dirname + "/" + "index.html" );
})

app.listen('3030','192.168.0.105', function () {
    console.log('Example app listening on port 3000!');
  });