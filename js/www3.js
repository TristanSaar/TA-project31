const http = require('http');
const dateTimeET = require('../src/dateTimeET');
http.createServer(function(req, res){
    res.writeHead(200, {"Content-type": "text/html"});
	
let pageBody = 
	"<h1>Veeb läkski käima1</h1>";
  let pageFoot =
        `<p>Nädalapäev: ${dateTimeET.fullDay()}</p>
         <p>Kuupäev: ${dateTimeET.fullDate(1)}</p>
         <p>Kellaaeg: ${dateTimeET.fullTime()}</p>`;
	
    res.write(pageBody);
    res.write(pageFoot);
	
	return res.end();
}).listen(5131);
