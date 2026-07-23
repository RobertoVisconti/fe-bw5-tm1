import { createSlice } from "@reduxjs/toolkit"

export const fattureSlice = createSlice({
  name: "fatture",
  initialState: {
    value: [],
  },
  reducers: {
    fetchFatture: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { fetchFatture } = fetchFatture.action

export default fattureSlice.reducer
