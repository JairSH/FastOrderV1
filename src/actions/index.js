import {
  SET_DATA_PLATILLOS,
  SET_DATA_BEBIDAS,
  SET_DATA_POSTRES,
  SET_DATA_CLIENTES
} from '../constants'

import API from '../api'

export const setFavorite = payload => ({
  type: 'SET_FAVORITE',
  payload
})

export const deleteFavorite = payload => ({
  type: 'DELETE_FAVORITE',
  payload
})

export const loginRequest = payload => ({
  type: 'LOGIN_REQUEST',
  payload
})

export const logoutRequest = payload => ({
  type: 'LOGOUT_REQUEST',
  payload
})

export const registerRequest = payload => ({
  type: 'REGISTER_REQUEST',
  payload
})

export const getPlatillos = () => {
  return async (dispatch) => {
    // llame a la api
    const data = await API.getPlatillos()

    dispatch({
      type: SET_DATA_PLATILLOS,
      payload: data.results
    })
  }
}

export const getBebidas = () => {
  return async (dispatch) => {
    // llame a la api
    const data = await API.getBebidas()

    dispatch({
      type: SET_DATA_BEBIDAS,
      payload: data.results
    })
  }
}

export const getPostres = () => {
  return async (dispatch) => {
    // llame a la api
    const data = await API.getPostres()

    dispatch({
      type: SET_DATA_POSTRES,
      payload: data.results
    })
  }
}

export const getClientes = () => {
  return async (dispatch) => {
    const data = await API.getClientes()

    dispatch({
      type: SET_DATA_CLIENTES,
      payload: data.results
    })
  }
}

/*
export const createPostres = (dataToDjango) => {
  return async (dispatch) => {
    // llame a la api
    const data = await API.createPostres(dataToDjango)
    dispatch({
      type: ADD_DATA_POSTRES,
      payload: data
    })
  }
}

export const createClientes = (dataToDjango) => {
  return async (dispatch) => {
    const data = await API.createClientes(dataToDjango)
  }
}

export const createOrdenes = (dataToDjango) => {
  return async (dispatch) => {
    const data = await API.createOrdenes(dataToDjango)
  }
}
*/
