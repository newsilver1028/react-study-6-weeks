import { useState, useEffect } from "react";

import Comment from "./Comment";
import { currentTime } from "../Function/currentTime";

import styles from './CommentsForm.module.css';

function CommentsForm(props) {
  const isLogined = props.isLogined;
  const userName = props.userName;

  const [comment, setComment] = useState({
    userName: "",
    content: ""
  });
  const [addComment, setAddComment] = useState([]);

  useEffect(() => {
    const time = new Date(currentTime());
    const deleteComment = setInterval(() => {
      const deletedCommentsArray = addComment.filter((comment) => {
        const commentedTime = new Date(comment.date);
        return time.getSeconds() - commentedTime.getSeconds() < 30
      });
      setAddComment(deletedCommentsArray);
    }, 1000);
    return () => clearInterval(deleteComment);
  });

  function onChangeInputHandler(e) {
    const text = e.target.value;
    setComment({
      userName: userName,
      content: text,
    });
  }

  function onClickSubmitHandler(e) {
    e.preventDefault();
    const commentObject = {
      ...comment,
      date: currentTime(),
      id: `${userName+currentTime()}`
    };
    const commentArray = [...addComment,commentObject];
    setAddComment(commentArray);
  }

  function onClickDeleteHandler(e) {
    const deleteTarget = e.target.parentNode;
    const deleteTargetId = deleteTarget.id;
    const deletedArray = addComment.filter(element => {
      return element.id !== deleteTargetId;
    })
    setAddComment(deletedArray);
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
    {addComment.map((element,index) => {
      return <Comment 
        userName={element.userName} 
        content={element.content} 
        date={element.date} 
        isLogined={isLogined}
        key={element.date+JSON.stringify(index)}
        onClick={onClickDeleteHandler}
        />
    })}
    </div>
    </>
  )
}

export default CommentsForm;
