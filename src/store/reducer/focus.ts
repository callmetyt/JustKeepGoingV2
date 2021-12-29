import {createAction, createReducer} from '@reduxjs/toolkit';

export interface FocusInfoType {
  aim: string;
  startDate: number;
  endDate: number;
}

export const addInfo = createAction<FocusInfoType>('ADD_INFO');

const focusReducer = createReducer<FocusInfoType>(
  {
    aim: '',
    startDate: 0,
    endDate: 0,
  },
  builder => {
    builder.addCase(addInfo, (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    });
  },
);

export default focusReducer;
