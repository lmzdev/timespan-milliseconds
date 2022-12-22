# timespan-milliseconds
[![run tests](https://github.com/lmzdev/timespan-milliseconds/actions/workflows/tests.yml/badge.svg)](https://github.com/lmzdev/timespan-milliseconds/actions/workflows/tests.yml)

Pretty timespan-measurement in sub-milliseconds

## Install 
```npm i timespan-milliseconds```

## Import
```js
import {now, since} from 'timespan-milliseconds'

const start = now()
// do something
console.log(`took ${since(start)} ms`)
// 'took 1.23 ms'
```

## Require
```js
const {now, since} = require('timespan-milliseconds')

const start = now()
// do something
console.log(`took ${since(start)} ms`)
// 'took 1.23 ms'
```
