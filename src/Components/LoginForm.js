import { useReducer } from 'react';

import { visitor, reducer } from '../Reducer/LoginReducer';

function LoginForm() {
  const [loginState, dispatch] = useReducer(reducer,visitor);
  const loginText = loginState.isLogined ? "logout" : "login";

  const onChangeInputHandler = e => {
    // dispatch({
    //   name: e.target.value
    // })
    loginState.userName = e.target.value;
    // 🚨 객체에 접근하여 상태를 변경해도 되는지 
  }

  const onClickSubmitHandler = e => {
    e.preventDefault();

    if (!loginState.isLogined) {
      dispatch({
        type: 'LOGIN',
      })
    } else {
      dispatch({
        type: 'LOGOUT',
      })
    }
  }

  const inputText = <input type="text" id="inputUserName" onChange={onChangeInputHandler}/>;
  
  return (
    <form>
      {loginState.isLogined ? loginState.userName : inputText}
      <button type="button" id="submitUserName" onClick={onClickSubmitHandler}>{loginText}</button>
    </form>
  )
}

export default LoginForm;
