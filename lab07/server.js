/**
* lab07 server
*
*/
var express = require('express');
var app = express();
app.use(express.static('public'));



app.get('/fetch', function(req, res)
{
	res.send({"content" : req.query.name});
});

app.listen(3000, function()
{
	console.log("Example app listening on port 3000");
});
