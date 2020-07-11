import { gql } from 'apollo-boost'

const BOOKS = gql`
  query Books {
    books {
      id
      title
      authors {
        id
        name
      }
    }
  }
`

const AUTHORS = gql`
  query Authors {
    authors {
      id
      name
    }
  }
`

export { BOOKS, AUTHORS }
