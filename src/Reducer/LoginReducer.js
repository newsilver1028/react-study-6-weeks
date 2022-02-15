const visitor = {
    isLogined: false,
    userName: ""
  }

function reducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLogined: true
      };
    case 'LOGOUT':
      return {
        isLogined: false,
        userName: ''
      }
    default:
      return state;
  }
}

export { visitor, reducer }