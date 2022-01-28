import {createSlice} from '@reduxjs/toolkit';

export interface UsersInfoType {
  token: string;
  userName: string;
}

const initialState: UsersInfoType = {
  token: '',
  userName: '',
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    updateUsersInfo(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

const {actions, reducer} = usersSlice;
export const {updateUsersInfo} = actions;
export default reducer;
