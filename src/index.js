const fs = require("fs");
const express = require("express");
const nunjucks = require("nunjucks");
const routes = require("./routes");
const Migration = require("./migrations");
const { dbFile } = require("./db");
const cors = require("cors");
const app = express();

app.use(express.static("public"));
app.use(routes);
app.use(express.json());
app.use(cors());

app.set("view engine", "njk");

nunjucks.configure("src/views", {
  express: app,
  autoescape: true,
  noCache: true
});

(async () => {
  if (!fs.existsSync(dbFile)) {
    await Migration.up();
  }
})();

app.listen(3000, () => {
  console.log("App is running!");
});
