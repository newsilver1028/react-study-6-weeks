import { useState } from "react";

import Comment from "./Comment";
import { currentTime } from "../Function/currentTime";

function CommentsForm(props) {
  const [comment, setComment] = useState({});
  const [addComment, setAddComment] = useState([]);

  function onClickSubmitHandler(e) {
    e.preventDefault();
    const text = document.getElementById("input-comments").value;
    const commentObject = {
      userName: props.userName,
      content: text,
      date: currentTime()
    }
    setComment(commentObject);    
    const array = addComment.concat(commentObject);
    setAddComment(array);
  }

  return(
    <>
    <form>
      <div>
        <textarea id="input-comments" rows="5" cols="50" />
        <button id="submit-comments" onClick={onClickSubmitHandler}>Tweet</button>
      </div>
    </form>
    {addComment.map((element,index) => {
      return <Comment userName={element.userName} content={element.content} date={element.date} key={element.date+JSON.stringify(index)}/>
    })}
    </>
  )
}

export default CommentsForm;
