import { configureStore } from "@reduxjs/toolkit"
import { clientiSlice } from "./store/clienti"
import { fattureSlice } from "./store/fatture"

export default configureStore({
  reducer: {
    clienti: clientiSlice,
    fatture: fattureSlice,
  },
})
