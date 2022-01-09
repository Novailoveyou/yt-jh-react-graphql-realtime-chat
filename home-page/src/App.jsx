import React from 'react'
import ReactDOM from 'react-dom'
import { Container } from 'shards-react'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'shards-ui/dist/css/shards.min.css'

import './index.css'

const App = () => (
  <Container>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sapiente
      sunt iusto. Obcaecati veniam eum odit repudiandae laborum nobis
      voluptatibus sapiente eligendi doloribus. Numquam ex saepe animi, deserunt
      enim minima, est dolor labore fuga rem quidem quia similique in soluta
      laborum harum ad tenetur voluptates id ullam? A, amet asperiores.
    </p>
    <h1>Chat!</h1>
    <div>Chat window here</div>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis aliquam
      quisquam non suscipit voluptatibus ex quasi vero dolore saepe ullam!
    </p>
  </Container>
)

ReactDOM.render(<App />, document.getElementById('app'))
