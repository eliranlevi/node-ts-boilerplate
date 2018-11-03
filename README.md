# Node-TypeScript boilerplate

Preconfigured boilerplate for building Node.js applications using Express & TypeScript, MySQL with Objection (ORM) and Knex.

## Goal

Start building a Node.js server using SQL database and TypeScsipt in seconds 🎉

## Usage

Clone the repo, remove `.git` folder (`rm -rf .git`), install dependencies (`yarn install`) and you're ready to go (`yarn start`)

## Scripts

- `yarn start` - serves the app on `localhost` in watch mode
- `yarn run build` - builds the project, the out directory is `/dist`
- `yarn db:migrate` - updates the database with the latest migrations an alias for `knex migrate:latest`),
- `yarn db:rb` - rollbacks last migrations (an alias for `knex migrate:rollback`),
- `yarn db:mc migration_name` - creates a new migration named `migration_name` (an alias for `knex migrate:make`)

## Packages 📦

- [TypeScript](https://github.com/Microsoft/TypeScript) is here just to get modern ES6 features in Node, like `import/export`
- [request-promise-native](https://github.com/request/request-promise-native) - use `Promise`s in Node requests
- [express](https://github.com/expressjs/express) - watch (and interact) whatever you expect in the browesr rather than CLI
- [nodemon](https://github.com/remy/nodemon) - runs the server in watch mode (i.e. will rebuild each time the code has changed)

#### Database-related

- [knex](https://github.com/tgriesser/knex) - a query builder for PostgreSQL, MySQL and SQLite3
- [mysql2](https://github.com/sidorares/node-mysql2) - MySql database client
- [objection](https://github.com/Vincit/objection.js) - [ORM](https://en.wikipedia.org/wiki/Object-relational_mapping)

## Recommendations (best practices)

- Use [Knex migrations](https://knexjs.org/#Migrations) for creating database schemas

## License

MIT
