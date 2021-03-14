import { 
  SET_DATA_FOOD,
  SET_DATA_BEBIDAS
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

export const getFood = () => {
  return async (dispatch) => {
    // llame a la api
    const data = await API.getFood()

    dispatch({
      type: SET_DATA_FOOD,
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
