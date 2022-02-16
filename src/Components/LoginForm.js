import { useReducer } from 'react';

import { visitor, reducer } from '../Reducer/LoginReducer';
import CommentsForm from './CommentsForm';

import { userNameState } from '../State/userNameState';
import { useSetRecoilState } from 'recoil';

function LoginForm() {
  const [loginState, dispatch] = useReducer(reducer,visitor);
  const setUserName = useSetRecoilState(userNameState);
  const loginText = loginState.isLogined ? "logout" : "login";

  function onChangeInputHandler(e) {
    // 🚨 객체에 접근하여 상태를 변경해도 되는지 
    loginState.userName = e.target.value;
    setUserName({ userName: e.target.value});
  }

  function onClickSubmitHandler(e) {
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
  // logout일 때 CommentsForm에 포커스 방지.

  const inputText = <input type="text" id="inputUserName" onChange={onChangeInputHandler}/>;
  const commentsFormID = `${inputText}-comments-form`;
  return (
    <>
    <form>
      {loginState.isLogined ? loginState.userName : inputText}
      <button type="button" id="submitUserName" onClick={onClickSubmitHandler}>{loginText}</button>
    </form>
    {/* {loginState.isLogined && <CommentsForm id={commentsFormID}/>} */}
    <CommentsForm id={commentsFormID} userName={loginState.userName}/>
    </>
  )
}

export default LoginForm;
