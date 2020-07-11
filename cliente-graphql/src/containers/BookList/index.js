import React from 'react'
import { useQuery } from 'react-apollo'

import * as queries from '../../api/queries'

function BookList() {

  const {loading, error, data} = useQuery(queries.BOOKS)

  if(loading) {
    return <h2>Carregando...</h2>
  }

  if(error) {
    return <h2>{error.message}</h2>
  }

  return (
    <div>
      <ul>
        {data.books.map(book => (
          <li key={book.id}>
            <p>{book.title}</p>
            <ul>
              {book.authors.map(author => (
                <li key={author.id}>{author.name}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BookList
