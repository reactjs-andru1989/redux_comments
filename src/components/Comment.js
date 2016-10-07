import React, { PropTypes } from 'react';
import Remarkable from 'remarkable';

const rawMarkup = (text) => {
  const md = new Remarkable();
  const rawMarkup = md.render(text.toString());
  return { __html: rawMarkup };
}

const Comment = ({author, text}) => {
  return (
    <li className="list-group-item">
      <span dangerouslySetInnerHTML={rawMarkup(text)} />
    </li>
  )
}

Comment.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Comment;