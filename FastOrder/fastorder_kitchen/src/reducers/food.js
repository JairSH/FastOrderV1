import {
  ADD_DATA_POSTRES,
  ADD_DATA_BEBIDAS,
  ADD_DATA_PLATILLOS
} from '../constants'

const initialState = {
  user: {},
  myList: [],
  platillos: [],
  bebidas: [],
  postres: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload
      }
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload
      }
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload
      }
    case ADD_DATA_POSTRES:
      return {
        ...state,
        postres: state.postres.concat(action.payload)
      }
    case ADD_DATA_PLATILLOS:
      return {
        ...state,
        postres: state.platillos.concat(action.payload)
      }
    case ADD_DATA_BEBIDAS:
      return {
        ...state,
        postres: state.bebidas.concat(action.payload)
      }
    default:
      return state
  }
}
export default reducer
