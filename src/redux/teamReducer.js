import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'team',
  initialState: {
    value:JSON.parse(localStorage.getItem("userHeroes")),
  },
  reducers: {
    add:(state,action) => {
      console.log(action.payload)
      state.value.push(action.payload)
    },
    deleteMember: (state, action) => {
    
      state.value = state.value.filter(hero => hero.id !== action.payload);
    },
  },
});



export const { add, deleteMember } = slice.actions;
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectTeam = state => state.team.value;

export default slice.reducer;
