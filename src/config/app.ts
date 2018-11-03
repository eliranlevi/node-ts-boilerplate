const app = {
  api: {
    version: 1,
    path() {
      return `/v${app.api.version}`;
    },
  },
  port: 3000,
};

export default app;
