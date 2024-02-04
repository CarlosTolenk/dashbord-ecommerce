import { Dispatch } from 'redux';

export const ThemeChanger = (value: any) => async (dispatch: Dispatch) => {
  dispatch({
    type: 'ThemeChanger',
    payload: value,
  });
};
