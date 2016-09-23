var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var pageData = {'title':'Shiva Web Page','heading':'Welcome to Express JS Web App','content':'You are viewing the contents served from a express Web Server.'};

function createTemplate(data){
	var title = data.title, heading = data.heading, content = data.content;console.log(data.title);
	var htmlTemplate = '<html><head><title>'+data.title+'</title><link href="/ui/style.css" rel="stylesheet"/></head><body><h1>'+data.heading+'</h1><p>'+data.content+'</p></body></html>';
	return htmlTemplate;
}

app.get('/', function (req, res) {
  //res.sendFile(path.join(__dirname, 'ui', 'index.html'));
    res.send(createTemplate(pageData));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
