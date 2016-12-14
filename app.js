const 
    http = require('http'),
    express = require('express'),
    path = require('path');

let 
    app = express(),
    server = http.createServer(app);

app.use(express.static(path.join(__dirname)));


server.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
});