import { useState } from 'react';

function LoginForm() {
  const [loginState, setLoginState] = useState({
    isLogined: false,
    userName: ""
  });
  const LoginText = loginState.isLogined ? "logout" : "login";

  function onChangeInputHandler(e) {
    const temp = {
      ...loginState,
      userName: e.target.value
    }
    setLoginState(temp);
  }

  function onClickSubmitHandler(e) {
    e.preventDefault();
    let loginObject = {};
    if (!loginState.isLogined) {
      loginObject = {
        ...loginState,
        isLogined: true,
      }
    } else {
      loginObject = {
        isLogined: false,
        userName: ""
      }
    }
    setLoginState(loginObject);
  }

  return (
    <form>
    {loginState.isLogined ? loginState.userName : <input type="text" id="inputUserName" onChange={onChangeInputHandler}/>}
    <button type="button" id="submitUserName" onClick={onClickSubmitHandler}>{LoginText}</button>
    </form>
  )
}

export default LoginForm;