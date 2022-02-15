import { useState } from "react";

import Comment from "./Comment";
import { currentTime } from "../Function/currentTime";

function CommentsForm() {
  // const currentDate = 
  const [comment, setComment] = useState({});
  const [addComment, setAddComment] = useState([]);

  function onChangeInputHandler(e) {
    const content = {
      ...comment,
      content: e.target.value
    }
    setComment(content);
  }
  
  function onClickSubmitHandler(e) {
    e.preventDefault();
    const commentObject = {
      ...comment,
      userName: "userName",
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
        <textarea id="inputComments" rows="5" cols="50" onChange={onChangeInputHandler}/>
        <button id="submitComments" onClick={onClickSubmitHandler}>Tweet</button>
      </div>
    </form>
    {addComment.map((element,index) => {
      return <Comment userName={element.userName} content={element.content} date={element.date} key={element.date+JSON.stringify(index)}/>
    })}
    </>
  )
}

export default CommentsForm;
