const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = 5173;

app.use(cors());
app.use(express.json());

const FILE_PATH = "./comments.txt";

/* WRITE COMMENT */
app.post("/write", (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ message: "Text is required" });
  }

  fs.appendFile(FILE_PATH, `* ${text}\n`, (err) => {
    if (err) {
      return res.status(500).json({ message: "Error writing file" });
    }
    res.json({ message: "Comment saved" });
  });
});

/* READ COMMENTS */
app.get("/read", (req, res) => {
  fs.readFile(FILE_PATH, "utf8", (err, data) => {
    if (err) {
      return res.json({ comments: [] });
    }

    const comments = data.split("\n").filter((line) => line.trim() !== "");

    res.json({ comments });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
