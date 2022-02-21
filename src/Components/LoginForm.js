import { useState, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import CommentsForm from './CommentsForm';
import { userNameState } from '../State/userNameState';

import styles from './LoginForm.module.css';

function LoginForm() {
  const setUserName = useSetRecoilState(userNameState);
  const [input, setInput] = useState("");
  const [state, setState] = useState({
    isLogined: false,
    userName: ""
  });
  const loginText = state.isLogined ? "LOGOUT" : "LOGIN";
  const getUserName = JSON.parse(window.localStorage.getItem("user-name"));

  useEffect(() => {
    const storedUserName = JSON.parse(window.localStorage.getItem("user-name"));
    if (storedUserName) {
      setState({
        isLogined: true,
        userName: storedUserName
      });
      setUserName(storedUserName);
    }
  },[state.userName]);

  function onChangeInputHandler(e) {
    const text = e.target.value;
    setInput(text);
  }

  function onClickSubmitHandler(e) {
    e.preventDefault();
    if (!state.isLogined){
      window.localStorage.setItem("user-name", JSON.stringify(input));
      // const getUserName = JSON.parse(window.localStorage.getItem("user-name"));
      setState({
        userName: getUserName,
        isLogined: true,
      });
      setUserName(getUserName);
      return;
    }
    localStorage.removeItem("user-name");
    setState({
      isLogined: false,
      userName: ""
    });
  }

  const inputText = <input type="text" className={styles.inputUserName} onChange={onChangeInputHandler}/>;

  return (
    <div className={styles.loginFormWrapper}>
    <form className={styles.loginForm}>
      {state.isLogined ? <h2 className={styles.loginedUser}>{state.userName}</h2> : inputText}
      <button 
        type="button" 
        className={styles.submitUserName} 
        onClick={onClickSubmitHandler}>
        {loginText}
      </button>
    </form>
    <CommentsForm isLogined={state.isLogined} userName={state.userName}/>
    </div>
  )
}

export default LoginForm;
