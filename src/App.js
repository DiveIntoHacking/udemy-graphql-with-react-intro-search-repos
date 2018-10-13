import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import { Query } from 'react-apollo'
import client from './client'
import { SEARCH_REPOSITORIES } from './graphql'

const VARIABLES = {
  first: 5,
  after: null,
  last: null,
  before: null,
  query: "フロントエンドエンジニア"
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = VARIABLES
  }

  render() {
    const { query, first, last, before, after } = this.state
    return (
      <ApolloProvider client={client}>
        <Query
          query={SEARCH_REPOSITORIES}
          variables={{ query, first, last, before, after }}
        >
          {
            ({ loading, error, data }) => {
              if (loading) return 'Loading...'
              if (error) return `Error! ${error.message}`

              console.log({data})
              return <div></div>
            }
          }
        </Query>
      </ApolloProvider>
    )
  }
}

export default App