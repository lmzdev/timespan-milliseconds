# timespan-milliseconds
Pretty timespan-measurement in sub-milliseconds

## Install 
```npm i timespan-milliseconds```

## Import
```js
import {now, since} from 'timespan-milliseconds'

const start = now()
// do something
console.log(`took ${since(start)} ms`)
```

## Require
```js
const {now, since} = require('timespan-milliseconds')

const start = now()
// do something
console.log(`took ${since(start)} ms`)
```