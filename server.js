const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");

// const routes = require("./routes");

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// const articleFind = require("")
// import ArticleFind from "./client/src/components/routes/"

// app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact");

const db = require("./models");
// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.get("/api/articles", (req, res) => {
  db.Article.find({}, (err, found) => {
    if (err) {
      console.log(err);
    }
    else if (found) {
      res.json(found);
    }
  });
});

app.post("/api/articles", (req, res) => {
  db.Article.insert(req.body, (error, saved) => {
    if (error) {
      console.log(error);
    }
    else {
      res.send(saved);
    }
  });
});

// app.delete("/api/articles", (req, res) => {
//   db.Article.remove()
// })

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
