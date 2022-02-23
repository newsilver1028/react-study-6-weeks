// redux 사용하기
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from '../reducers/loginReducer';

import { useState, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import CommentsForm from './CommentsForm';
import { userNameState } from '../State/userNameState';

import styles from './LoginForm.module.css';

function LoginForm() {
  const [input, setInput] = useState("");
  // redux 사용하기
  // dispatch를 사용하기 위한 준비
  const dispatch = useDispatch();

  // store에 접근하여 state 가져오기
  const { userName } = useSelector(state => state.loginReducer);
  const { isLogined } = useSelector(state => state.loginReducer);

  const loginFunc = () => {
    // store에 있는 state 바꾸는 함수 실행
    dispatch(login(input));
  }

  const logoutFunc = () => {
    dispatch(logout());
  }

  const setUserName = useSetRecoilState(userNameState);
  const loginText = isLogined ? "LOGOUT" : "LOGIN";
  const getUserName = JSON.parse(window.localStorage.getItem("user-name"));

  useEffect(() => {
    const storedUserName = JSON.parse(window.localStorage.getItem("user-name"));
    if (!storedUserName) {
      return;
    }
    loginFunc(storedUserName);
    setUserName(storedUserName);
  },[userName]);

  function onChangeInputHandler(e) {
    const text = e.target.value;
    setInput(text);
  }

  function onClickSubmitHandler(e) {
    e.preventDefault();
    if (!isLogined){
      window.localStorage.setItem("user-name", JSON.stringify(input));
      console.log(input);
      loginFunc(input);
      setUserName(input);
      return;
    }
    localStorage.removeItem("user-name");
    logoutFunc();
  }

  const inputText = <input type="text" className={styles.inputUserName} onChange={onChangeInputHandler}/>;

  return (
    <div className={styles.loginFormWrapper}>
    <form className={styles.loginForm}>
      {isLogined ? <h2 className={styles.loginedUser}>{getUserName}</h2> : inputText}
      <button 
        type="button" 
        className={styles.submitUserName} 
        onClick={onClickSubmitHandler}>
        {loginText}
      </button>
    </form>
    <CommentsForm />
    </div>
  )
}

export default LoginForm;
