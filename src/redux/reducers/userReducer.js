import { SET_USER_DATA } from "../actions/userActions";

const initialState = {
  isAuth: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {...state, ...action.data};
    }
    default:
      return state;
  }
};

export default userReducer;
