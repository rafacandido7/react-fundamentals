import React from 'react'
import Header from './components/Header'
import Post from './components/Post'

function App() {
  return (
    <>
      <Header >
        <h2>Posts da semanaa</h2>
      </Header>
      <hr />
      <Post
        likes={10}
        post={{
          title: 'Titulo da notícia 01',
          subtitle: 'Subtitulo da notícia 01',
        }}
      />
      <Post
        likes={10}
        post={{
          title: 'Titulo da notícia 02',
          subtitle: 'Subtitulo da notícia 02',
        }}
      />
      <Post
        likes={10}
        post={{
          title: 'Titulo da notícia 03',
          subtitle: 'Subtitulo da notícia 03',
        }}
      />
    </>
  )
}

export default App
