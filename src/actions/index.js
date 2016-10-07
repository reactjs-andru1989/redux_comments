import thunk from 'redux-thunk';
import axios from 'axios';
import fetch from 'isomorphic-fetch';

let nextId = 0;

export const addComment = (author, text) => {
  return {
    type: 'ADD_COMMENT',
    id: nextId++,
    author,
    text
  }
}

export const addAsyncComment = (author, text) => {
  return dispatch => {
    axios.post('/api/comments',`author=${author}&text=${text}`)
      .then(() => {
        dispatch(addComment(author, text))
      })
      .catch((error) => {
        console.log(error);
      })
  }
}

export const initializeComments = (comments) => {
  return {
    type: "INITIALIZE_COMMENTS",
    comments
  }
}