import { configureStore } from '@reduxjs/toolkit';
import teamReducer from './teamReducer';

export default configureStore({
  reducer: {
    team: teamReducer,
  },
});
