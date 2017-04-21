import path from 'path'
import fs from 'fs'

import capitalize from './utils/capitalize'
import createFromTemplate from './utils/createFileTemplate'

const arg = process.argv[2]
const rewrite = process.argv[3]
/* eslint-disable no-console */

if (!arg.length) {
  throw new Error('Specify component name')
}

const name = capitalize(arg)
const dest = path.join(__dirname, '../../app', 'components', name)

// createFromTemplate({ name }, dest, element, rewrite)
if (!fs.existsSync(dest) || rewrite === 'y') {
  createFromTemplate('components/_jsx', { name }, dest, `${name}.jsx`)
  createFromTemplate('components/_package', { name }, dest, 'package.json')
  createFromTemplate('components/_scss', { name }, dest, `${name}.scss`)
  createFromTemplate('components/_test', { name }, dest, `${name}.spec.js`)
} else {
  console.log('Directory exists! use "y" key as a second argument to rewrite component')
}
