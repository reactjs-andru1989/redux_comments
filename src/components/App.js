import React from 'react';
import AddComment from '../containers/AddComment';
import CommentsList from '../containers/CommentsList';

const App = () => {
  return (
    <div className="row">
      <div className="page-header">
        <h1 className="text-center text-muted">Comments</h1>
      </div>
      <CommentsList />
      <AddComment />
    </div>
  )
}

export default App;