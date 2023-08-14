import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface themeState {
  theme: string;
}

const initialState: themeState = {
  theme: "",
};

const getInitialState = (): themeState => {
  const theme = "tomato";
  return {
    ...initialState,
    theme,
  };
};

export const themeSlice = createSlice({
  name: "theme",
  initialState: getInitialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
