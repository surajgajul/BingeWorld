const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;
const home = fs.readFileSync("./index.html")
const about = fs.readFileSync("./about.html")
const justarrived = fs.readFileSync("./justarrived.html")
const hollywood = fs.readFileSync("./hollywood.html")
const bollywood = fs.readFileSync("./bollywood.html")
const anime = fs.readFileSync("./anime.html")

const server = http.createServer((req,res) => {
  console.log(req.url)
  url = req.url;

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  if(url == "/"){
        res.end(home);
  }
  else if(url == "/about"){
      res.end(about);
  }
  else if(url == "/justarrived"){
      res.end(justarrived);
  }
  else if(url == "/hollywood"){
      res.end(hollywood);
  }
  else if(url == "/bollywood"){
      res.end(bollywood);
  }
  else if(url == "/anime"){
      res.end(anime);
  }
  else{
      res.statusCode = 404;
      res.end("<h1>404 not found</h1>");
  }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });