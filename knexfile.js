const env = process.env.NODE_ENV || "development";

// use env variables or enter database info
const config = {
  development: {
    database: "",
    user: "",
    password: "",
  },
};

module.exports = {
  client: "mysql2",
  connection: config[env],
  migrations: {
    tableName: "migrations",
  },
};
