const comment = (state, action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return {
        id: action.id,
        author: action.author,
        text: action.text
      }
      break;

    default:
      return state;
  }
}

const comments = (state = [], action) => {
  switch (action.type) {
    case 'INITIALIZE_COMMENTS':
      return [
        ...action.comments
      ];
    case 'ADD_COMMENT':
      return [
        ...state,
        comment(undefined, action)
      ];
      break;

    default:
      return state;
  }
}

export default comments;