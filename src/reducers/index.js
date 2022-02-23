import { combineReducers } from "redux";
import { loginReducer } from './loginReducer';
import { commentReducer } from "./commentReducer";

const rootReducer = combineReducers({
  loginReducer,
  commentReducer
});

export default rootReducer;
