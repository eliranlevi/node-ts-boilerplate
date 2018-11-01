import express from "express";

const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("Node app is live");
});

app.listen(PORT, () => {
  console.log(`Access your app now on http://localhost:${PORT}`);
});
