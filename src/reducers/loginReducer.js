const visitor = {
  isLogined: false,
  userName: ""
}
const LOGIN = "LOGINREDUCER/LOGIN";
const LOGOUT = "LOGINREDUCER/LOGOUT";

const login = userName => ({ type: LOGIN, userName});
const logout = () => ({ type: LOGOUT, userName:""});

function loginReducer(state = visitor, action) {
  // 초기 상태로 visitor 지정
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogined: true,
        userName: action.userName
      };
    case LOGOUT:
      return {
        isLogined: false,
        userName: ""
      }
    default:
      return state;
  }
  // default 대신 오류를 반환해야함.
}

export { loginReducer, login, LOGIN, logout, LOGOUT }
