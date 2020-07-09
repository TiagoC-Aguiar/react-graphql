const { GraphQLObjectType, GraphQLID, GraphQLList } = require('graphql')
const { Author, Book } = require('./types')
const { getAuthorsFromFile, getBooksFromFile } = require('./connection')

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    book: {
      type: Book,
      args: { id: { type: GraphQLID } },
      resolve(_, args) {
        return getBooksFromFile().find((book) => {
          return book.id === args.id
        })
      },
    },
    author: {
      type: Author,
      args: { id: { type: GraphQLID } },
      resolve(_, args) {
        return getAuthorsFromFile().find((author) => {
          return author.id === args.id
        })
      },
    },
    books: {
      type: new GraphQLList(Book),
      resolve() {
        return getBooksFromFile()
      },
    },
    authors: {
      type: new GraphQLList(Author),
      resolve() {
        return getAuthorsFromFile()
      },
    }
  }
})

module.exports = Query