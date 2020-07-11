import { gql } from 'apollo-boost'

const ADD_AUTHOR = gql`
  mutation AddAuthor($name: String!) {
    addAuthor(name: $name) {
      id
    }
  }
`

const ADD_BOOK = gql`
  mutation AddBook($title: String!, $authorsId: [ID!]!) {
    addBook(title: $title, authorsId: $authorsId) {
      id
    }
  }
`


export {ADD_AUTHOR, ADD_BOOK}
