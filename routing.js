// ! Routing => It is used to handle multiple endpoint based on the client's request

let http = require("http");
let fs = require("fs");
      //!  server creation 
let server = http.createServer((req, res) => {
  if (req.url === "/HomePage") {
    res.writeHead(200, "ok", { "content-type": "text/html" });
    fs.createReadStream("./index.html", "utf-8").pipe(res);

    //  res.end("This is home page");
  } else if (req.url === "/CssFile") {
    res.writeHead(200, "ok", { "content-type": "text/css" });
    fs.createReadStream("./style.css", "utf-8").pipe(res);

    // res.end("about page");
  } else if (req.url === "/JsFile") {
    res.writeHead(200, "ok", { "content-type": "application/javascript" });
    fs.createReadStream("./index.js", "utf-8").pipe(res);

    // res.end("page not found");
  }
  else if (req.url === "/about") {
    res.writeHead(200, "ok", { "content-type": "text/html" });
    fs.createReadStream("./main.html","utf-8").pipe(res)
  }
});
server.listen(9000, err => {
  if (err) throw err;
  console.log(`server running at http://localhost:9000`);
});
