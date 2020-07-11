import React, { useEffect } from 'react'
import { useQuery } from 'react-apollo'

import * as queries from '../../api/queries'

function BookList() {

  const query = useQuery(queries.BOOKS)

  useEffect(() => {
    console.log(query)
  }, [query])

  return (
    <div>
      booklist
    </div>
  )
}

export default BookList
