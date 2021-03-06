import { SET_LIGHT_DARK } from '../../actions/lightDarkActions/lightDarkActions';

const initialState = {
  lightOrDark: true,
};

export default function lightDarkReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LIGHT_DARK:
      return {
        ...state,
        lightOrDark: action.payload,
      };
    default:
      return state;
  }
}
