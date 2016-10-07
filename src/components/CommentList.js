import React, { PropTypes } from 'react';
import AuthorComments from './AuthorComments';

const CommentList = ({comments}) => {
  return (
    <div className="comments">
      {Object.keys(comments).map((author) => {
        return(
          <div key={Math.random()} className="row">
            <h2 className="text-center">{author}</h2>
            <AuthorComments comments={comments[author]} />
          </div>
        )
      })}
    </div>
  )
}

export default CommentList;