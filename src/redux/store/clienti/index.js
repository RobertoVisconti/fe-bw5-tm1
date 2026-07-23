import { createSlice } from "@reduxjs/toolkit"

export const clientiSlice = createSlice({
  name: "clienti",
  initialState: {
    value: [],
  },
  reducers: {
    fetchClienti: (state, action) => {
      state.value += action.payload
    },
  },
})

export default clientiSlice.reducer
