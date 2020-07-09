const fs = require('fs')
const { v4 } = require('uuid')
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
} = require('graphql')
const { Author, Book } = require('./types')
const {
  authorsPath,
  booksPath,
  getAuthorsFromFile,
  getBooksFromFile,
} = require('./connection')

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addAuthor: {
      type: Author,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(_, args) {
        const authorToAdd = {
          id: v4(),
          name: args.name
        }
        const authors = getAuthorsFromFile()
        const newAuthors = authors.concat(authorToAdd)
        fs.writeFileSync(authorsPath, JSON.stringify(newAuthors))
        return authorToAdd
      },
    },
    addBook: {
      type: Book,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        authorsId: {
          type: new GraphQLNonNull(
            new GraphQLList(new GraphQLNonNull(GraphQLID))
          )
        }
      },
      resolve(_, args) {
        const bookToAdd = {
          id: v4(),
          title: args.title,
          authorsId: args.authorsId
        }
        const books = getBooksFromFile()
        const newBooks = books.concat(bookToAdd)
        fs.writeFileSync(booksPath, JSON.stringify(newBooks))
        return bookToAdd
      },
    },
  },
})

module.exports = Mutation