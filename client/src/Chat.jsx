import React from 'react'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from '@apollo/client'
import { Container, Row, Col, FormInput, Button } from 'shards-react'

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
})

const GET_MESSAGES = gql`
  query {
    messages {
      id
      content
      user
    }
  }
`

const Messages = ({ user }) => {
  const { data } = useQuery(GET_MESSAGES)
  if (!data) return null

  return (
    <>
      {data.messages.map(({ id, user: messageUser, content }) => (
        <div
          key={id}
          style={{
            display: 'flex',
            justifyContent: user === messageUser ? 'flex-end' : 'flex-start',
            paddingBottom: '1em'
          }}>
          {user !== messageUser && (
            <div
              style={{
                height: 50,
                width: 50,
                marginRight: '0.5em',
                paddingTop: 5,
                border: '2px solid #e5e6ea',
                borderRadius: 25,
                fontSize: '18pt',
                textAlign: 'center'
              }}>
              {messageUser.slice(0, 2).toUpperCase()}
            </div>
          )}
          <div
            style={{
              maxWidth: '60%',
              padding: '1em',
              borderRadius: '1em',
              background: user === messageUser ? '#58bf56' : '#e5e6ea',
              color: user === messageUser ? '#fff' : '#000'
            }}>
            {content}
          </div>
        </div>
      ))}
    </>
  )
}

const Chat = () => {
  const [state, setState] = React.useState({
    user: 'Jack',
    content: ''
  })
  const onSend = () => {
    if (state.content.length > 0) {
    }
    setState({
      ...state,
      content: ''
    })
  }
  return (
    <ApolloProvider client={client}>
      <Container>
        <Messages user={state.user} />
        <Row>
          <Col xs={2} style={{ padding: 0 }}>
            <FormInput
              label='User'
              value={state.user}
              onChange={evt => setState({ ...state, user: evt.target.value })}
            />
          </Col>
          <Col xs={8}>
            <FormInput
              label='User'
              value={state.content}
              onChange={evt =>
                setState({ ...state, content: evt.target.value })
              }
              onKeyUp={evt => {
                // if enter is pressed
                if (evt.keyCode === 13) {
                  onSend()
                }
              }}
            />
          </Col>
          <Button onClick={() => onSend()}>Send</Button>
        </Row>
      </Container>
    </ApolloProvider>
  )
}

export default Chat
