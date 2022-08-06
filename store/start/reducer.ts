import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  flagStart: boolean;
  time: number;
}

const initialState: IState = {
  flagStart: true,
  time: 15,
};

export const startSlice = createSlice({
  name: "start",
  initialState,
  reducers: {
    onClickStart(state: IState) {
      state.flagStart = false;
    },
    onClickRelaod(state: IState) {
      state.flagStart = true;
    },
    onChangeTime(state: IState, action: PayloadAction<number>) {
      state.time = action.payload;
    },
  },
});

export const { onClickRelaod, onClickStart, onChangeTime } = startSlice.actions;
export default startSlice.reducer;
