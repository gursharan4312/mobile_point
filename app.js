const express = require("express");
const app = express();
const routes = require("./routes");
const connection = require("./db/connection");

app.use(express.static("public"));
app.use(express.json());

app.use("/shop", routes);

app.get("/favicon.ico", (req, res) => {
  res.status(204).end();
});

app.get("/*", (req, res) => {
  res.status(302).redirect("/");
});

app.use((err, req, res, next) => {
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send("Something Went Wrong");
});

connection.once("open", () => {
  console.log("connected to db");

  const server = app.listen(8080, () => {
    console.log("listening on 8080");
  });
});
