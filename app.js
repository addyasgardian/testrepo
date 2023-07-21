const express = require("express");
const cors = require("cors");
const path = require("path");
const PORT = 443;

const app = express();

app.use(cors());

app.use((req, res) => {
  return res.sendFile(path.join(__dirname, "Portal", "index.html"));
});

app.listen(PORT, () => {
  console.log(`App is Ruuning on PORT ${PORT}`);
});
