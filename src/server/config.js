const express = require("express");
const app = express();
const routes = require("../routes");
const morgan = require("morgan");

app.set("port", process.env.PORT || 8000);

app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use("/", routes);

app.listen(app.get("port"), () => {
  console.log("servidor en puerto", app.get("port"));
});

module.exports = app;
