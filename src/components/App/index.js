import React, { useState, createContext } from 'react'
import Header from '../Header'
import Post from '../Post'
import { ThemeProvider } from '../../context/ThemeContext'

export const ThemeContext = createContext('dark')

function App() {

  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'Title#01', subtitle: 'Subtitle#01', likes: 50, read: false, removed: true },
    { id: Math.random(), title: 'Title#02', subtitle: 'Subtitle#02', likes: 12, read: false, removed: false },
    { id: Math.random(), title: 'Title#03', subtitle: 'Subtitle#03', likes: 43, read: false, removed: false },
    { id: Math.random(), title: 'Title#04', subtitle: 'Subtitle#04', likes: 24, read: false, removed: false },
  ])

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Title#0${prevState.length + 1}`,
        subtitle: `Subtitle#0${prevState.length + 1}`,
        likes: 50,
        read: false
      }
    ]
    )
  }

  function handleRemovePost(postId) {
    setPosts((prevState) => (
      prevState.map(post => (
        post.id === postId
          ? { ...post, removed: !post.removed }
          : post
        ))
    ))
  }



  return (
    <ThemeProvider>
      <Header>
        <h2>
          Posts da semana
          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </Header>
      <hr />

      {posts.map(post => (
        <Post
          key={post.id}
          onRemove={handleRemovePost}
          post={post}
        />
      ))
      }
    </ThemeProvider>
  )
}

export default App
