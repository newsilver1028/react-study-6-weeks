import { currentTime } from '../Function/currentTime';

const initicalState = [];
const ADD = "COMMENTREDUCER/ADD";
const DELETE = "COMMENTREDUCER/DELETE";

const addComment = (userName, content) => ({ type: ADD, userName, content });
const deleteComment = (target) => ({ type: DELETE, target });

function commentReducer(state = initicalState, action) {
  switch (action.type) {
    case ADD:
      const newCommentObject = {
        isLogined: true,
        userName: action.userName,
        content: action.content,
        date: currentTime(),
        id: `${action.userName+currentTime()}`
      }
      const commentsArray = [...state, newCommentObject];
      return commentsArray;
    case DELETE:
      const deletedArray = state.filter(comment => comment.id !== action.target);
      return deletedArray;
    default:
      return state;
  }
  // default 대신 오류를 반환해야함.
}

export { commentReducer, addComment, ADD, deleteComment, DELETE };
