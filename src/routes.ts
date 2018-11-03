import { Router } from "express";

const routes = [
  "users"
];

export default function defineRoutes() {
  const router = Router();

  routes.forEach(name => {
    const route = require(`./routes/${name}`).default;
    router.use(`/${name}`, route);
  });

  return router;
};
