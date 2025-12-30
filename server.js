const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://fayzullaevfarrukh98_db_user:g4cx1JMS4mZoJmZV@cluster0.7a6s1vl.mongodb.net/reja_app_db?retryWrites=true&w=majority";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
      console.log("MongoDB connected successfully");
      module.exports = client;

      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `The server is running succesfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
