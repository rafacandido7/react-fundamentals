import React from 'react'
import Header from './components/Header'
import Post from './components/Post'

const posts = [
  { title: 'Title#01', subtitle: 'Subtitle#01', likes: 50 },
  { title: 'Title#02', subtitle: 'Subtitle#02', likes: 12 },
  { title: 'Title#03', subtitle: 'Subtitle#03', likes: 43 },
]

function App() {
  return (
    <>
      <Header >
        <h2>Posts da semanaa</h2>
      </Header>

      <hr />

      {posts.map(post => (
        <Post
          key={post.title}
          post={{
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
