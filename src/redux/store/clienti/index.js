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
    deleteClienti: (state, action) => {},
  },
})

export const { fetchClienti, deleteClienti } = clientiSlice.actions

export default clientiSlice.reducer
