function LoginForm() {
  let isLogined = false;
  let userName = "helloworld";  // 인풋에서 받아온 값 넘기기

  return (
    <form>
    {isLogined ? userName : <input type="text" id="inputUserName"/>}
    <button type="button" id="submitUserName">{isLogined ? "logout" : "login"}</button>
    </form>
  )
}

export default LoginForm;