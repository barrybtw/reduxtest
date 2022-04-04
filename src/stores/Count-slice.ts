import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface countState {
  value: number;
}

const initState: countState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initState,
  reducers: {
    decrement(state) {
      // Immer mutation
      state.value--;
    },
    increment(state) {
      // Immer mutation
      state.value++;
    },
    reset(state) {
      // Immer mutation
      state.value = initState.value;
    },
    manualSet(state, action: PayloadAction<number>) {
      // Immer mutation
      state.value = action.payload;
    },
  },
});

export const { decrement, increment, reset, manualSet } = counterSlice.actions;
export default counterSlice.reducer;
