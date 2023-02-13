import React from "react"
import PropTypes from 'prop-types';

export default function Post(props) {
  const post = props.post

  return (
    <>
      <article>
        <strong>{post.title}</strong>
        <button onClick={() => props.onRemove(post.id)}>Remover</button>
        <br />
        <small>{post.subtitle}</small>
        <br />
        Média: {props.likes / 2}
      </article>
      <br />
    </>
  )
}

Post.propTypes = {
  likes: PropTypes.number.isRequired,
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired,
}
