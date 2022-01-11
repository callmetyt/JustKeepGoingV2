import {configureStore} from '@reduxjs/toolkit';
import focusReducer from './reducer/focus';
import usersReducer from './reducer/users';

const store = configureStore({
  reducer: {
    focus: focusReducer,
    users: usersReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
