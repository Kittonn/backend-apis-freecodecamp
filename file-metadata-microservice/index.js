const express = require("express");
const cors = require("cors");
require("dotenv").config();
const multer = require("multer");
const app = express();
const upload = multer({ dest: "uploads/" });
app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.post("/api/fileanalyse", upload.single("upfile"), (req, res) => {
  const { originalname, mimetype, size } = req.file;
  res.json({
    name: originalname,
    type: mimetype,
    size,
  });
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Your app is listening on port " + port);
});
