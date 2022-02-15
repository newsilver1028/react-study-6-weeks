import { useState } from 'react';

function LoginForm() {
  const [loginState, setLoginState] = useState({
    isLogined: false,
    userName: ""
  });

  function onChangeInputHandler(e) {
    const temp = {
      ...loginState,
      userName: e.target.value
    }
    setLoginState(temp);
  }

  function onClickSubmitHandler(e) {
    e.preventDefault();
    // isLogined 체크
    // const Logout = {
    //   isLogined: false,
    //   userName: ""
    // }
    // setLoginState(Logout);
    // if() userName 체크
    const Logined = {
      ...loginState,
      isLogined: true,
    }
    setLoginState(Logined);
  }

  return (
    <form>
    {loginState.isLogined ? loginState.userName : <input type="text" id="inputUserName" onChange={onChangeInputHandler}/>}
    <button type="button" id="submitUserName" onClick={onClickSubmitHandler}>{loginState.isLogined ? "logout" : "login"}</button>
    </form>
  )
}

export default LoginForm;