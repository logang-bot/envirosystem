const express = require("express");
const app = express();
const routes = require("../routes");

app.use("/", routes);

app.set("port", process.env.PORT || 8000);

app.listen(app.get("port"), () => {
  console.log("servidor en puerto", app.get("port"));
});

module.exports = app;
