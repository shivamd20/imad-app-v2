var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne ={
    title:"Article One:ramesh",
    heading:"Article",
      date:"5 sept",
      content:      `   <p>
                    this is thhe first article  this is thhe first article this is thhe first article this is thhe first article this is thhe first article this is thhe first article this is thhe first article this is thhe first article this is thhe first article this is thhe first article this is thhe first article this is thhe first article this is thhe first article 
                </p>
                 <p>
                    this is thhe first article  this is thhe first article this is thhe first article this is thhe first article this is thhe first article this is thhe first article this is thhe first article this is thhe first article this is thhe first article this is thhe first article this is thhe first article this is thhe first article this is thhe first article 
                </p>
                 <p>
                    this is thhe first article  this is thhe first article this is thhe first article this is thhe first article this is thhe first article this is thhe first article this is thhe first article this is thhe first article this is thhe first article this is thhe first article this is thhe first article this is thhe first article this is thhe first article 
                </p>`
}

function createTemplate(data)
{
    var title=data.title;
    var date=data.date;
    var content=data.content;
    var heading=data.heading;
    
        var htmlTemplate=
            `<html>
          <head>
            <title> ${title} </title>
            <meta name="viewport" content="width-device-width, initial-scale-1" /> 
          </head>
        
          <body>
                      <link href="/ui/style.css" rel="stylesheet" />
            <div class="container">
                    <div>
                      <a href='/'> home  </a>
                    </div>
                    <hr/>
                    <h3> 
                    
                         ${heading}
                    </h3>
                    <div>
                        ${date}
                    </div>
                    <div>
                       ${content}
                    </div>
                </div>
          </body>
        </html>`;
        
        
            

        
        return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/article-one', function (req, res) {
  res.send(createTemplate(articleOne));
});


app.get('/article-two', function (req, res) {
  res.send('this is the article two');
});

app.get('/article-three', function (req, res) {
  res.send('this is the article three');
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
