console.log("Web serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();

const fs = require("fs");

// MongoDB chaqirish
const db = require("./server").db();

// let user;
// fs.readFile("database/user.json", "utf-8", (err, data) => {
//   if (err) {
//     console.log("ERROR:", err);
//   } else {
//     user = JSON.parse(data);
//   }
// });

// 1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session
// 3: Veiws code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing code
app.post("/create-item", (req, res) => {
  // TODO: code with here
});

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

app.get("/", function (req, res) {
  res.render("reja");
});

// 5: Server code

module.exports = app;
