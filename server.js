console.log("Web serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");

// 1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session
// 3: Veiws code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing code
app.get("/", function (req, res) {
  res.end("HELLO WORLD");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running succesfully on port: ${PORT}`);
});
