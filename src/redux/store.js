import { configureStore } from "@reduxjs/toolkit"
import reducerClienti from "./store/clienti"

export default configureStore({
  reducer: {
    clienti: reducerClienti,
  },
})
