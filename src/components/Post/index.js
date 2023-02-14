import React from "react"
import PropTypes from 'prop-types';
import PostHeader from "../PostHeader";

import styles from './styles.scss'

export default function Post(props) {
  const post = props.post

  console.log(post)
  return (
    <article
    className={
      post.removed
        ? styles.postDeleted
        : styles.post
    }
    >
      <PostHeader
        onRemove={props.onRemove}
        post={{
          id: props.post.id,
          title: props.post.title,
          read: props.post.read,
        }}
      />
      <br />
      <small>{post.subtitle}</small>
      <br />
      Média: {post.likes / 2}
    </article>
  )
}

Post.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
    removed: PropTypes.bool.isRequired,
  }).isRequired,
}
