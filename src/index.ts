import express from "express";
import defineRoutes from "./routes";
import configDb from "./config/database";
import config from "./config/app";

const { port, api } = config;
const app = express();
const router = defineRoutes();
const base = api.path();

configDb();

app.use(base, router);

app.listen(port, () => {
  console.log(`Access your app now on http://localhost:${port}`);
});

// this route can be removed
app.get("/", (req, res) => res.send("Node app is live"));

export default app;
