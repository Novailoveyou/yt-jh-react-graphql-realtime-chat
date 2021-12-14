import { GraphQLServer } from 'graphql-yoga'

const messages = []

const typeDefs = `
  type Message{
    id: ID!
    user: String!
    content: String!
  }

  type Query {
    messages: [Message!]
  }

  type Mutation {
    postMessage(user: String!, content: String!): ID!
  }
`

const resolvers = {
  Query: {
    messages: () => messages
  },
  Mutation: {
    postMessage: (parent, { user, content }) => {
      const id = messages.length
      messages.push({
        id,
        user,
        content
      })
      return id
    }
  }
}

const app = new GraphQLServer({ typeDefs, resolvers })
app.start(({ port }) => {
  console.log(`Server is running on http://localhost:${port}`)
})