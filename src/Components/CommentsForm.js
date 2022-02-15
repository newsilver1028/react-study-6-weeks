import { useState } from "react";

import Comment from "./Comment";

function CommentsForm() {
  const [comment, setComment] = useState([]);

  function onChangeInputHandler(e) {

  }
  
  function onClickSubmitHandler(e) {
    e.preventDefault();

  }

  return(
    <>
    <form>
      <div>
        <textarea id="inputComments" rows="5" cols="50" onChange={onChangeInputHandler}/>
        <button id="submitComments" onClick={onClickSubmitHandler}>Tweet</button>
      </div>
    </form>
    </>
  )
}

export default CommentsForm;
