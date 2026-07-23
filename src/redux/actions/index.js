import { data } from "react-router-dom"

export const FETCH_CLIENTI = "FETCH_CLIENTI"
export const DELETE_CLIENTE = "DELETE_CLIENTE"

export const fetchClientiAction = () => {
  return {
    type: FETCH_CLIENTI,
  }
}

export const deleteClienteAction = () => {
  return {
    type: DELETE_CLIENTE,
  }
}

export const handleFetchClienti = () => {
  return (dispatch, _) => {
    fetch("http://localhost:5555/clienti")
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else throw new Error("errore nel recupero")
      })
      .then((data) => {
        dispatch({
          type: FETCH_CLIENTI,
          payload: data.content,
        })
        console.log(data.content)
      })
      .catch((ex) => console.log(ex))
  }
}
