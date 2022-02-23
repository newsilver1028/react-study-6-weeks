import { useRecoilValue } from 'recoil';
import { userNameState } from '../State/userNameState';
import { useSelector } from 'react-redux';

import styles from './Comment.module.css';

function Comment(props) {
  const { isLogined } = useSelector(state => state.loginReducer);
  const current = useRecoilValue(userNameState);
  const userName = props.userName;
  const content = props.content;
  const date = props.date;
  const onDelete = props.onDelete;
  const isAuthor = isLogined && current === userName;

  return(
    <div id={userName+date} className={styles.commentsWrapper}>
      <div className={styles.textWrapper}>
        <span className={styles.userName}>USER 👤 - {userName}</span>
        <h3>{content}</h3>
        <span className={styles.date}>{date}</span>
      </div>
      {isAuthor && <button 
      type="button" 
      className={styles.deleteButton}
      onClick={onDelete}>
      Delete</button>}
    </div>
  )
}

export default Comment;
