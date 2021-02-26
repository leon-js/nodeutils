const fs = require('fs')

const content = fs.readFileSync(
  './dist/commit/index.js',
  {encoding: 'utf-8'}
)

const str = content.replace(/@utils/g, '../utils')

console.log(str, typeof str)