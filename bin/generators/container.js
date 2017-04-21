import path from 'path'
import fs from 'fs'

import capitalize from './utils/capitalize'
import createFromTemplate from './utils/createFileTemplate'

const arg = process.argv[2]
const rewrite = process.argv[3]
/* eslint-disable no-console */

if (arg.length === 0 || !/^[a-zA-z/]{1,}$/.test(arg[0])) {
  throw new Error('You should specify a valid name argument')
}

const name = capitalize(arg)
const dest = path.join(__dirname, '../../app', 'containers', name)

// createFromTemplate({ name }, dest, element, rewrite)
if (!fs.existsSync(dest) || rewrite === 'y') {
  createFromTemplate('containers/_jsx', { name }, dest, `${name}.jsx`)
  createFromTemplate('containers/_package', { name }, dest, 'package.json')
  createFromTemplate('containers/_test', { name }, dest, `${name}.spec.js`)
} else {
  console.log('Directory exists! use "y" key as a second argument to rewrite component')
}
