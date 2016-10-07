import React from 'react';
import { connect } from 'react-redux';
import { addAsyncComment } from '../actions';

let AddComment = ({dispatch}) => {
  let authorInput, textInput;

  return(
    <div className="col-md-6 col-md-offset-3">
      <form
        onSubmit={e => {
          e.preventDefault();
          if(!authorInput.value.trim() || !textInput.value.trim()) return;
          dispatch(addAsyncComment(authorInput.value, textInput.value));
          authorInput.value = '';
          textInput.value = '';
        }}
      >

        <div className="row">
          <div className="col-md-6">
            <input
              type="text"
              style={{marginBottom: '5px'}}
              className="form-control"
              placeholder="Your name"
              ref={node => {
                authorInput = node
              }}
            />
          </div>

          <div className="col-md-6">
            <input
              type="text"
              style={{marginBottom: '5px'}}
              className="form-control"
              placeholder="Say something"
              ref={node => {
                textInput = node
              }}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-success btn-block">Add comment</button>
      </form>
    </div>
  )
}

AddComment = connect()(AddComment);
export default AddComment;
