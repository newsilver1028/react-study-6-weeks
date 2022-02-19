import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { userNameState } from '../State/userNameState';

function Comment(props) {
  const current = useRecoilValue(userNameState);
  
  const userName = props.userName;
  const content = props.content;
  const date = props.date;
  // login userName이랑 댓글 작성한 userName이 같을 때 Delete button 표시
  const isAuthor = current.userName === userName;

  function onClickDeleteHandler(e) {
    const deleteTarget = e.target.parentNode;
    deleteTarget.remove();
  }

  useEffect(() => {
    const $comment = document.getElementById("comment-div");
    const deleteComment = setTimeout(() => {
      $comment.remove();
    }, 10000);
    return () => clearTimeout(deleteComment);
  });
  

  return(
    <div id='comment-div'>
      <h1>{userName}</h1>
      <h4>{content}</h4>
      <span>{date}</span>
      {isAuthor && <button type="button" onClick={onClickDeleteHandler}>Delete</button>}
    </div>
  )
}

export default Comment;
