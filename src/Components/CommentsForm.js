import { useState, useEffect } from "react";

import Comment from "./Comment";
import { currentTime } from "../Function/currentTime";

function CommentsForm(props) {
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
        return time.getSeconds() - commentedTime.getSeconds() < 10
      });
      setAddComment(deletedCommentsArray);
    }, 1000);
    return () => clearInterval(deleteComment);
  });

  function onChangeInputHandler(e) {
    const text = e.target.value;
    setComment({
      ...comment,
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
      return element.id !== deleteTargetId
    })
    setAddComment(deletedArray);
  }

  return(
    <>
    <form>
      <div>
        <textarea id="input-comments" rows="5" cols="50" onChange={onChangeInputHandler}/>
        <button id="submit-comments" onClick={onClickSubmitHandler}>Tweet</button>
      </div>
    </form>
    {addComment.map((element,index) => {
      return <Comment 
        userName={element.userName} 
        content={element.content} 
        date={element.date} 
        key={element.date+JSON.stringify(index)}
        onClick={onClickDeleteHandler}
        />
    })}
    </>
  )
}

export default CommentsForm;
