import { createSelector } from "reselect";

import { currentTime } from "../Function/currentTime";

const getComments = state => state.commentsReducer;

export const deleteComments = createSelector([getComments],
  (comments) => {
  const time = new Date(currentTime());
  const deletedCommentsArray = comments.filter((comment) => {
    const commentedTime = new Date(comment.date);
      return time.getSeconds() - commentedTime.getSeconds() < 10
  });
  return deletedCommentsArray;
})
