import React, { useState } from 'react'
import Header from './components/Header'
import Post from './components/Post'

function App() {
  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'Title#01', subtitle: 'Subtitle#01', likes: 50 },
    { id: Math.random(), title: 'Title#02', subtitle: 'Subtitle#02', likes: 12 },
    { id: Math.random(), title: 'Title#03', subtitle: 'Subtitle#03', likes: 43 },
  ])

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Title#0${prevState.length + 1}`,
        subtitle: `Subtitle#0${prevState.length + 1}`,
        likes: 50,
      }
      ]
    )
  }

  function handleRemovePost (postId) {
    setPosts((prevState) => (
      prevState.filter(post => post.id !== postId)
      ))
  }


  console.log({ posts })


  return (
    <>
      <Header >
        <h2>
          Posts da semanaa
          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </Header>

      <hr />

      {posts.map(post => (
        <Post
          key={post.id}
          onRemove={handleRemovePost}
          post={{
            id: post.id,
            title: post.title,
            subtitle: post.subtitle
          }}
          likes={post.likes}
        />
      ))}
    </>
  )
}

export default App
