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
  createTablesSafely: knex => tables => {
    const createTables = tables.map(({ name, schema }) => {
      return knex.schema.createTable(name, schema)
    });

    return Promise.all(createTables)
      .catch(e => {
        const dropTables = tables.map(({ name }) => {
          return knex.schema.dropTableIfExists(name);
        });

        return Promise.all(dropTables).then(() => Promise.reject(e));
      });
  }
};
