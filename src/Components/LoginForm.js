import { useState } from 'react';
import { useSetRecoilState } from 'recoil';

import CommentsForm from './CommentsForm';
import { userNameState } from '../State/userNameState';

function LoginForm() {
  const setUserName = useSetRecoilState(userNameState);
  const [state, setState] = useState({
    isLogined: false,
    userName: ""
  });
  const loginText = state.isLogined ? "logout" : "login";

  // 새로고침 시 데이터 유지하기
  // useEffect(() => {
  //   const temp = window.localStorage.setItem("user-name", JSON.stringify(loginState.userName));
  //   if (temp) loginState.isLogined = true;
  // }, []);

  function onChangeInputHandler(e) {
    const text = e.target.value;
    setState({
      ...state,
      userName: text
    });
    setUserName({ userName: text });
  }

  function onClickSubmitHandler(e) {
    e.preventDefault();
    if (!state.isLogined){
      setState({
      ...state,
      isLogined: true,
    });
    return;
    }
    setState({
      isLogined: false,
      userName: ""
    });
  }

  // logout일 때 CommentsForm에 포커스 방지.

  const inputText = <input type="text" id="input-user-name" onChange={onChangeInputHandler}/>;
  const getUserName = window.localStorage.getItem("user-name");

  return (
    <>
    <form>
      {state.isLogined ? state.userName : inputText}
      {/* {state.isLogined ? JSON.parse(getUserName) : inputText} */}
      <button 
        type="button" 
        id="submit-user-name" 
        onClick={onClickSubmitHandler}>
        {loginText}
      </button>
    </form>
    <CommentsForm userName={state.userName}/>
    </>
  )
}

export default LoginForm;
