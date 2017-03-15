# Avast Stack

## Getting started

```
git clone git@github.com:blueberryapps/avast-stack.git
cd avast-stack
yarn install
yarn start
```

## Build process

```
yarn build // development build
yarn build:prod // production build
```

## API

```
BASE_URL=http://some.url/endpoint yarn start
```

will tell application to use custom endpoint for API

when you are doing production build, you must specify this option too.

```
BASE_URL=http://some.url/endpoint yarn build:prod
```


## Testing

Run linter: `yarn eslint`

Run jest: `yarn jest`

Run jest in watch mode: `yarn jest -- --watch`

Run all test at once `yarn test`
