require("dotenv").config();
var express = require("express");
var app = express();
var cors = require("cors");

app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/whoami", (req, res) => {
  try {
    return res.status(200).json({
      ipaddress: req.ip,
      language: req.headers["accept-language"],
      software: req.headers["user-agent"],
    });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

var listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
