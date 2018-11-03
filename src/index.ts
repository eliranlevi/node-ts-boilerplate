import express from "express";
import defineRoutes from "./routes";
import config from "./config/app";
import middlewares from "./middlewares";
import dbConnect from "./config/database";

const { api, port } = config;
const base = api.path;

const app = express();
const router = defineRoutes();

dbConnect();

app.use(base, middlewares)
app.use(base, router);

app.listen(port);

console.log(`Access your app now on http://localhost:${port}`);

// this route can be removed
app.get("/", (req, res) => res.send("Node app is live"));

export default app;
