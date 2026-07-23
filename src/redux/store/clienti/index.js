import { FETCH_CLIENTI, DELETE_CLIENTE } from "../../actions"

const initialState = {
  clienti: [],
}

const reducerClienti = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CLIENTI:
      return {
        ...state,
        clienti: action.payload,
      }

    case DELETE_CLIENTE:
      return {
        state,
      }

    default:
      return state
  }
}

export default reducerClienti
