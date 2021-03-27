import {
  SET_DATA_PLATILLOS,
  SET_DATA_BEBIDAS,
  SET_DATA_POSTRES,
  SET_DATA_CLIENTES
  /* ADD_DATA_POSTRES,
  ADD_DATA_CLIENTES,
  ADD_DATA_ORDENES */
} from '../constants'

const initialState = {
  user: {},
  myList: [],
  platillos: [],
  bebidas: [],
  postres: [],
  clientes: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state,
        // aqui se indica el elemento de la informacion que se presentara
        myList: [...state.myList, action.payload]
      }
    case 'DELETE_FAVORITE':
      return {
        ...state,
        myList: state.myList.filter(items => items.id !== action.payload)
      }
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
    case SET_DATA_PLATILLOS:
      return {
        ...state,
        platillos: action.payload
      }
    case SET_DATA_BEBIDAS:
      return {
        ...state,
        bebidas: action.payload
      }
    case SET_DATA_POSTRES:
      return {
        ...state,
        postres: action.payload
      }
    case SET_DATA_CLIENTES:
      return {
        ...state,
        clientes: action.payload
      }
    /* case ADD_DATA_POSTRES:
      return {
        ...state,
        postres: state.postres.concat(action.payload)
      }
    case ADD_DATA_CLIENTES:
      return {
        ...state,
        clientes: state.clientes.concat(action.payload)
      }
      case ADD_DATA_ORDENES:
      return {
        ...state,
        myList: state.clientes.concat(action.payload)
      }
    */
    default:
      return state
  }
}
export default reducer
