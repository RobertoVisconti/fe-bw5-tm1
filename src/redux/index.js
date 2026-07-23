import { configureStore } from "@reduxjs/toolkit"
import { reduxClienti } from "./store/clienti"
import { fattureSlice } from "./store/fatture"

export default configureStore({
  reducer: {
    clienti: reduxClienti,
    fatture: fattureSlice,
  },
})
