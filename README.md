# Node-TypeScript boilerplate

Preconfigured boilerplate for building Node.js applications using Express & TypeScript

## Usage

Clone the repo, remove `.git` folder (`rm -rf .git`), install dependencies (`yarn install`) and you're ready to go (`yarn start`)

## Scripts

- `yarn start` - serves the app on `localhost` in watch mode
- `yarn run build` - builds the project, the out directory is `/dist`

## Packages

- [TypeScript](https://github.com/Microsoft/TypeScript) is here just to get modern ES6 features in Node, like `import/export`
- [request-promise-native](https://github.com/request/request-promise-native) - use `Promise`s in Node requests
- [express](https://github.com/expressjs/express) - watch (and interact) whatever you expect in the browesr rather than CLI
- [nodemon](https://github.com/remy/nodemon) - runs the server in watch mode (i.e. will rebuild each time the code has changed)

## License

MIT