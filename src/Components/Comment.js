function Comment() {
  // userName은 상위 컴포넌트에서 provider로 받기.
  // contents는 prop으로 받기.
  // day는 해당 컴포넌트에서 만들기 

  return(
    <div>
      <h1>username</h1>
      <h4>contents</h4>
      <span>day</span>
    </div>
  )
}

export default Comment;
