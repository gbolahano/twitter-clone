// require("dotenv").config({ path: __dirname + "/../variables.env" });
const express = require("express");
const http = require("http");
const path = require("path");
const cors = require("cors");
const postRoutes = require("./routes/post");

const app = express();
app.use(express.static(path.join(__dirname, "build")));

app.use(express.json());
app.use(cors());

app.use("/api/posts", postRoutes);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const server = http.createServer(app);

const PORT = process.env.PORT || 5000

server.listen(PORT, "0.0.0.0", (req, res) => {
  console.log("server started");
});
