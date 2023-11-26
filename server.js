const express = require("express");
const path = require("path");

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "app", "static")));
app.use("/data", express.static(path.resolve(__dirname, "app", "data")));
app.use("/utils", express.static(path.resolve(__dirname, "app", "utils")));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "app", "index.html"));
});

app.listen(process.env.PORT || 3000, () => console.log("Server running..."));
