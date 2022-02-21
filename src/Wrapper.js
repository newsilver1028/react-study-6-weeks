import LoginForm from './Components/LoginForm';

import styles from './Wrapper.module.css';

function Wrapper() {
return (
    <div className={styles.wrapper}>
      <LoginForm />
    </div>
  )
}

export default Wrapper;