import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    saveSearchQuery: (_, action) => action.payload,
    clearSearchQuery: () => "",
  },
});

export const { saveSearchQuery, clearSearchQuery } = searchSlice.actions;
export default searchSlice.reducer;
