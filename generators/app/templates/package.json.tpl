{
  "name": "<%= name %>",
  "version": "1.0.0",
  "description": "<%= description %>",
  "main": "./index.js",
  "module": "./esm/index.js",
  "scripts": {
    "build": "npm run build:es5 && npm run build:es6 && npm run build:umd",
    "build:es5": "tsc -p tsconfig.es5.json",
    "build:es6": "tsc -p tsconfig.es6.json",
    "build:umd": "webpack",
    "prebuild": "rimraf dist",
    "postbuild": "cp package.json dist/package.json",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/<FILL_IT>"
  },
  "keywords": [
    "keywords"
  ],
  "author": "<%= author %>",
  "license": "MIT",
  "devDependencies": {
    "@types/node": "^8.0.19",
    "@types/webpack": "^3.0.5",
    "rimraf": "^2.6.1",
    "ts-loader": "^2.3.2",
    "ts-node": "^3.3.0",
    "typescript": "^2.4.2",
    "webpack": "^3.4.1"
  }
}
