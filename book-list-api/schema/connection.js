const fs = require('fs')
const path = require('path')

const authorsPath = path.join(
  path.dirname(process.mainModule.filename),
  'database',
  'authors.json',
)
const booksPath = path.join(
  path.dirname(process.mainModule.filename),
  'database',
  'books.json',
)

function getAuthorsFromFile() {
  return JSON.parse(fs.readFileSync(authorsPath))
}

function getBooksFromFile() {
  return JSON.parse(fs.readFileSync(booksPath))
}

exports.authorsPath = authorsPath
exports.booksPath = booksPath
exports.getAuthorsFromFile = getAuthorsFromFile
exports.getBooksFromFile = getBooksFromFile