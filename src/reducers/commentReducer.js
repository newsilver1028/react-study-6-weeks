import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';
import { currentTime } from '../Function/currentTime';

const initicalState = [];
const ADD = "COMMENTREDUCER/ADD";
const DELETE = "COMMENTREDUCER/DELETE";

export const addComment = (saveData) => ({ type: ADD, saveData });
export const deleteComment = (target) => ({ type: DELETE, target });
// export const addComment = createAction(ADD, saveData => saveData);
// export const deleteComment = createAction(DELETE, target => target);

function commentReducer(state = initicalState, action) {
  switch (action.type) {
    case ADD:
      const [userName, content] = action.saveData;
      const newCommentObject = {
        userName: userName,
        content: content,
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
}

// export default createReducer(initicalState, {
//   Add: (state, { payload: saveData }) => {
//     const [userName, content] = saveData;
//      const newCommentObject = {
//         userName: userName,
//         content: content,
//         date: currentTime(),
//         id: `${userName+currentTime()}`
//       }
//       const commentsArray = [...state, newCommentObject];
//     return commentsArray;
//   },
//   DELETE: (state, { payload: target}) => {
//     const deletedArray = state.filter(comment => comment.id !== target);
//     return deletedArray;
//   }
// })

// export const commentReducer = createSlice({
//   name: 'commentReducer',
//   initialState: initicalState,
//   reducers: {
//     Add: (state, { payload: saveData }) => {
//       const [userName, content] = saveData;
//       const newCommentObject = {
//         userName: userName,
//         content: content,
//         date: currentTime(),
//         id: `${userName+currentTime()}`
//       }
//       const commentsArray = [...state, newCommentObject];
//       return commentsArray;
//     },
//     DELETE: (state, { payload: target}) => {
//       const deletedArray = state.filter(comment => comment.id !== target);
//       return deletedArray;
//     }
//   }
// });

export { ADD, DELETE };

export { commentReducer };
