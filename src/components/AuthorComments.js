import React, { PropTypes } from 'react';
import Comment from './Comment';

const AuthorComments = ({comments}) => {
  return (
    <ul className="list-group col-md-6 col-md-offset-3">
      {comments.map(comment =>
        <Comment
          key={comment.id}
          {...comment}
        />
      )}
    </ul>
  )
}

AuthorComments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
};

export default AuthorComments;