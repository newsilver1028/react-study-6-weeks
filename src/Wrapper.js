import { useReducer } from 'react';

import InputCommentsForm from './Components/InputCommentsForm';
import LoginForm from './Components/LoginForm';

function Wrapper() {
return (
    <>
    <LoginForm />
    <InputCommentsForm />
    </>
  )
}

export default Wrapper;