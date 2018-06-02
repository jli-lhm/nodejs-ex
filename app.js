var express = require('express')
var app = new express()

//set up ports
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 3000
var ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0'

app.get('/', function(req, res){
    res.end('Hello');
})

app.listen(port, ip, function(){
    console.log('Connected to IP: ' + ip + ' Port: ' + port);
})