import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { currentTime } from '../Function/currentTime';
import { userNameState } from '../State/userNameState';

function Comment(props) {
  const current = useRecoilValue(userNameState);
  
  const userName = props.userName;
  const content = props.content;
  const date = props.date;
  const onDelete = props.onClick;
  const isAuthor = current.userName === userName;

  // function onClickDeleteHandler(e) {
  //   const deleteTarget = e.target.parentNode;
  //   deleteTarget.remove();
  // }

  // useEffect(() => {
  //   const $comment = document.getElementById(date);
  //   const commentedTime = new Date(date);
  //   const deleteComment = setInterval(() => {
  //     const time = new Date(currentTime());
  //     if (time.getSeconds() - commentedTime.getSeconds() === 10) $comment.remove();
  //   }, 1000);
  //   return () => clearInterval(deleteComment);
  // });
  

  return(
    <div id={userName+date}>
      <h1>{userName}</h1>
      <h4>{content}</h4>
      <span>{date}</span>
      {isAuthor && <button 
      type="button" 
      onClick={onDelete}>
      Delete</button>}
    </div>
  )
}

export default Comment;
