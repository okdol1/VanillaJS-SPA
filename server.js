const express = require("express");
const path = require("path");

const app = express();

app.use("/data", express.static(path.resolve(__dirname, "app", "data")));
app.use("/js", express.static(path.resolve(__dirname, "app", "js")));
app.use("/utils", express.static(path.resolve(__dirname, "app", "utils")));
app.use("/views", express.static(path.resolve(__dirname, "app", "views")));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "app", "index.html"));
});

app.listen(process.env.PORT || 3000, () => console.log("Server running..."));
