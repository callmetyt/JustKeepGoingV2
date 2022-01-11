import {createSlice} from '@reduxjs/toolkit';

export interface UsersInfoType {
  token: string;
}

const initialState: UsersInfoType = {
  token: '',
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    updateUsersToken(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

const {actions, reducer} = usersSlice;
export const {updateUsersToken} = actions;
export default reducer;
