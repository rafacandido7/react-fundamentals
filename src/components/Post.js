import React from "react"

function Post(props) {
  const post = props.post

  return (
    <>
      <article>
        <strong>{post.title}</strong> <br />
        <small>{post.subtitle}</small>
      </article>
      <br />
    </>
  )
}

export default Post
