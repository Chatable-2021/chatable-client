import { light } from '@material-ui/core/styles/createPalette';

export const SET_LIGHT_DARK = 'SET_LIGHT_DARK';
export const setLightDark = lightOrDark => ({
  type: SET_LIGHT_DARK,
  payload: lightOrDark,
});
