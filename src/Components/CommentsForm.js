import { useState, useEffect } from "react";

import Comment from "./Comment";

import styles from './CommentsForm.module.css';

import { useSelector, useDispatch } from "react-redux";
import { addComment, deleteComment } from '../reducers/commentReducer';

function CommentsForm() {
  // store에 접근하여 state 가져오기
  const { userName } = useSelector(state => state.loginReducer);
  const { isLogined } = useSelector(state => state.loginReducer);
  const comments = useSelector(state => state.commentReducer);
  
  const dispatch = useDispatch();

  const [input, setInput] = useState("");
  const addCommentFunc = () => {
    // store에 있는 state 바꾸는 함수 실행
    dispatch(addComment(userName,input));
  }

  // useEffect(() => {
  //   const time = new Date(currentTime());
  //   const deleteComment = setInterval(() => {
  //     const deletedCommentsArray = addComment.filter((comment) => {
  //       const commentedTime = new Date(comment.date);
  //       return time.getSeconds() - commentedTime.getSeconds() < 30
  //     });
  //     setAddComment(deletedCommentsArray);
  //   }, 1000);
  //   return () => clearInterval(deleteComment);
  // });

  function onChangeInputHandler(e) {
    const text = e.target.value;
    setInput(text);
  }

  function onClickSubmitHandler(e) {
    e.preventDefault();
    addCommentFunc();
  }

  function onClickDeleteHandler(e) {
    const deleteTarget = e.target.parentNode;
    const deleteTargetId = deleteTarget.id;
    console.log(deleteTargetId);
    dispatch(deleteComment(deleteTargetId));
  }

  const disabledCommentsForm =
    <form className={styles.inputCommentsForm}>
      <textarea className={styles.inputComments} rows="5" cols="20" onChange={onChangeInputHandler} disabled/>
      <button className={styles.submitComments} onClick={onClickSubmitHandler} disabled>Tweet</button>
    </form>;
  
  const abledCommentsForm = 
    <form className={styles.inputCommentsForm}>
      <textarea className={styles.inputComments} rows="5" cols="20" onChange={onChangeInputHandler}/>
      <button className={styles.submitComments} onClick={onClickSubmitHandler}>Tweet</button>
    </form>

  return(
    <>
    {isLogined ? abledCommentsForm : disabledCommentsForm}
    <div className={styles.commentsFormWrapper}>
    {comments.map((element,index) => {
      return <Comment 
      userName={element.userName} 
      content={element.content} 
      date={element.date} 
      key={element.date+JSON.stringify(index)}
      onDelete={onClickDeleteHandler}
      />
    })}
    </div>
    </>
  )
}

export default CommentsForm;
