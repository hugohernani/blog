import { Environment, Network, RecordSource, Store, RequestParameters, Variables } from 'relay-runtime'

const store = new Store(new RecordSource())

const RELAY_API_ENDPOINT = 'http://localhost:3001/graphql'; // TODO

const network = Network.create(async (operation: RequestParameters, variables: Variables) => {
  return fetch(RELAY_API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json()
  })
})

const environment = new Environment({
  network,
  store,
})

export default environment
