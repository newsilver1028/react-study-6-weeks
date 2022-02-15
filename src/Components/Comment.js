function Comment(props) {
  const userName = props.userName;
  const content = props.content;
  const date = props.date;
  return(
    <div>
      <h1>{userName}</h1>
      <h4>{content}</h4>
      <span>{date}</span>
    </div>
  )
}

export default Comment;
