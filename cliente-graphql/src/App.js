import React from 'react'
import { ApolloProvider } from 'react-apollo'

import client from './api/client'
import Main from './pages/main'

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <Main />

      </ApolloProvider>
    </div>
  )
}

export default App
