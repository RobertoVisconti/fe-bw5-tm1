import { configureStore } from "@reduxjs/toolkit"
import { clientiSlice } from "./clientiSlice"

export default configureStore({
  reducer: {
    clienti: clientiSlice,
  },
})
