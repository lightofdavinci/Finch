const favicon = require('serve-favicon');
const path = require('path');
const express = require('express');
const app = express();

app.use('/public', express.static(process.cwd() + '/public'));
app.use('/css', express.static(process.cwd() + '/public/css'));
app.use('/images', express.static(process.cwd() + '/public/images'));
app.use('/scripts', express.static(process.cwd() + '/public/scripts'));
app.use('/fonts', express.static(process.cwd() + '/public/fonts'));
app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));

app.get('/', function(req, res){
			res.sendFile(process.cwd() + '/public/index.html');
		});

const port = process.env.PORT;
app.listen(port, function(){
	console.log('Node.js listening on port ' + port + '...');
});