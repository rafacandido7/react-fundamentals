import React from 'react'
import PropTypes from 'prop-types';
import Button from './Button';

export default function PostHeader(props) {
  const post = props.post
  return (
    <>
      <strong>
        {post.read ? <s>{post.title}</s> : post.title}
      </strong>
      <Button
        onClick={() => props.onRemove(post.id)}
      >
        Remover
      </Button>
    </>
  )
}

PostHeader.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired,
  }).isRequired,
}
