import { NAME } from "../constant/mainConstatnts";
const initialState = {
  name: '',
}

const mainReducer = function (state = initialState, action) {
  switch (action.type) {
    case NAME:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};

export default mainReducer;