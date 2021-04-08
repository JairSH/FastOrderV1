import {
  ADD_DATA_POSTRES,
  ADD_DATA_BEBIDAS,
  ADD_DATA_PLATILLOS
} from '../constants'

import API from '../api'

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

export const createPlatillos = (dataToDjango) => {
  return async (dispatch) => {
    // llame a la api
    const data = await API.createPlatillos(dataToDjango)
    dispatch({
      type: ADD_DATA_PLATILLOS,
      payload: data
    })
  }
}

export const createBebidas = (dataToDjango) => {
  return async (dispatch) => {
    // llame a la api
    const data = await API.createBebidas(dataToDjango)
    dispatch({
      type: ADD_DATA_BEBIDAS,
      payload: data
    })
  }
}