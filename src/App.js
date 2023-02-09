import React from 'react'
import Header from './components/Header'
import Post from './components/Post'

function App() {
  return (
    <>
      <Header title="JStack's Blog">
        <h2>Posts da semanaa</h2>
      </Header>
      <hr />
      <Post
        post={{
          title: 'Titulo da notícia 01',
          subtitle: 'Subtitulo da notícia 01',
        }}
      />
      <Post
        post={{
          title: 'Titulo da notícia 02',
          subtitle: 'Subtitulo da notícia 02',
        }}
      />
      <Post
        post={{
          title: 'Titulo da notícia 03',
          subtitle: 'Subtitulo da notícia 03',
        }}
      />
    </>
  )
}

export default App
