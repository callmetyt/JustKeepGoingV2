import {createSlice} from '@reduxjs/toolkit';

export interface FocusInfoType {
  aim: string;
  startDate: number;
  endDate: number;
}

const initialState: FocusInfoType = {
  aim: '',
  startDate: 0,
  endDate: 0,
};

const focusSlice = createSlice({
  name: 'focus',
  initialState,
  reducers: {
    updateFocusInfo(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

const {actions, reducer} = focusSlice;
export const {updateFocusInfo} = actions;

export default reducer;
