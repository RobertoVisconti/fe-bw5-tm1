import { createSlice } from "@reduxjs/toolkit"

export const clientiSlice = createSlice({
  name: "clienti",
  initialState: {
    value: [],
  },
  reducers: {},
})

export const { addClienti } = clientiSlice.actions

export default clientiSlice.reducer
