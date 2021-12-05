import {createAction, createReducer} from '@reduxjs/toolkit';

export interface FocusInfoType {
  aim: string;
}

export const addInfo = createAction<FocusInfoType>('ADD_INFO');

const focusReducer = createReducer<FocusInfoType>(
  {
    aim: '',
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
