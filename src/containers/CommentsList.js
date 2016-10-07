import { connect } from 'react-redux';
import CommentList from '../components/CommentList';
import axios from 'axios';

const group = (object, prop) => {
  return object.reduce(function(grouped, item) {
    var key = item[prop];
    grouped[key] = grouped[key] || [];
    grouped[key].push(item);
    return grouped;
  }, {});
}

const mapStateToProps = (state) => {
  return {
    comments: group(state.comments, 'author')
  }
};

const CommentsList = connect(mapStateToProps)(CommentList);

export default CommentsList;