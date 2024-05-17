// import _ from 'lodash'


// function add(a,b) {
//     return a+b
// }

// add()

// const objOne = {
//     name: "Tom",
//     age: 35
// }

// const objTwo = {
//     name: "Tom",
//     age: 35
// }

// console.log(_.isEqual(objOne, objTwo));

import fs from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const directory = fs.readdirSync(__dirname)
const filePath = __dirname + "/test.txt"
const testFile = fs.readFileSync(filePath, {encoding: "utf-8"})
console.log(testFile);

fs.writeFileSync(filePath, "hello")

