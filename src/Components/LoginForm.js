import { useReducer } from 'react';

import { visitor, reducer } from '../Reducer/LoginReducer';
import CommentsForm from './CommentsForm';

import { userNameState } from '../State/userNameState';
import { useSetRecoilState } from 'recoil';

function LoginForm() {
  const [loginState, dispatch] = useReducer(reducer,visitor);
  const setUserName = useSetRecoilState(userNameState);
  const loginText = loginState.isLogined ? "logout" : "login";

  function onClickSubmitHandler(e) {
    e.preventDefault();
    if (!loginState.isLogined) {
      const text = document.getElementById("input-user-name").value;
      loginState.userName = text;
      setUserName({ userName: text});
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

  const inputText = <input type="text" id="input-user-name" />;
  const commentsFormID = `${inputText}-comments-form`;
  return (
    <>
    <form>
      {loginState.isLogined ? loginState.userName : inputText}
      <button type="button" id="submit-user-name" onClick={onClickSubmitHandler}>{loginText}</button>
    </form>
    {/* {loginState.isLogined && <CommentsForm id={commentsFormID}/>} */}
    <CommentsForm id={commentsFormID} userName={loginState.userName}/>
    </>
  )
}

export default LoginForm;
