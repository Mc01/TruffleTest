# TruffleTest

Repo made for new issue on Trufflesuite https://github.com/trufflesuite/truffle/issues/971

## Setup
Install dependencies and fill test mnemonic in `.env`
```
npm i
copy .env.default .env
nano .env
```

## Reproduce
Run migrate
```
npm run migrate
```

## Info

Checkout `migrations/4_incorrect.js` for issues regarding https://github.com/trufflesuite/truffle-contract
