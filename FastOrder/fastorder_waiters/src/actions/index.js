import {
  SET_DATA_PLATILLOS,
  SET_DATA_BEBIDAS,
  SET_DATA_POSTRES,
  // ADD_DATA_ORDENES,
  CLEAN_ORDER_LIST
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

/* export const loginRequest = payload => ({
  type: 'LOGIN_REQUEST',
  payload
})
*/
export const loginRequest = (dataToDjango) => {
  return async (dispatch) => {
    // llame a la api
    const data = await API.loginRequest(dataToDjango)
    dispatch({
      type: 'LOGIN_REQUEST',
      payload: data
    })
  }
}

export const logoutRequest = payload => ({
  type: 'LOGOUT_REQUEST',
  payload
})

export const registerRequest = (dataToDjango) => {
  return async (dispatch) => {
    const data = await API.registerRequest(dataToDjango)
    dispatch({
      type: 'REGISTER_REQUEST',
      payload: data
    })
  }
}

export const tokenRequest = (dataToDjango) => {
  return async (dispatch) => {
    const data = await API.tokenRequest(dataToDjango)
    dispatch({
      type: 'TOKEN_REQUEST',
      payload: data
    })
  }
}
export const cleanOrderList = payload => ({
  type: CLEAN_ORDER_LIST
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

export const saveOrder = (dataToDjango) => {
  return async (dispatch) => {
    const data = await API.saveOrder(dataToDjango)
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

*/
