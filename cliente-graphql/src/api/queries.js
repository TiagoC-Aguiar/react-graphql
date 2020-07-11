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

export { BOOKS }
