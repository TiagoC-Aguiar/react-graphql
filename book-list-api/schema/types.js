const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
} = require('graphql')
const { getAuthorsFromFile, getBooksFromFile } = require('./connection')

const Author = new GraphQLObjectType({
  name: 'Author',
  fields: () => {
    return {
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      books: {
        type: new GraphQLList(Book),
        resolve(parent) {
          return getBooksFromFile().filter((book) => {
            return book.authorsId.some((authorId) => {
              return authorId === parent.id
            })
          })
        },
      },
    }
  },
})

const Book = new GraphQLObjectType({
  name: 'Book',
  fields: () => {
    return {
      id: { type: GraphQLID },
      title: { type: GraphQLString },
      authors: {
        type: new GraphQLList(Author),
        resolve(parent) {
          return getAuthorsFromFile().filter((author) => {
            return parent.authorsId.some((authorId) => {
              return authorId === author.id
            })
          })
        },
      },
    }
  },
})

exports.Author = Author
exports.Book = Book