import {
  SET_DATA_PLATILLOS,
  SET_DATA_BEBIDAS,
  SET_DATA_POSTRES,
  ADD_DATA_ORDENES,
  CLEAN_ORDER_LIST,
  LOADING,
  ERROR
  /* ADD_DATA_POSTRES,
  ADD_DATA_CLIENTES,
  */
} from '../constants'

const initialState = {
  loading: false,
  error: '',
  user: {},
  myList: [],
  platillos: [],
  bebidas: [],
  postres: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true
      }
    case ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
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
    case 'TOKEN_REQUEST':
      return {
        ...state,
        user: action.payload
      }
    case SET_DATA_PLATILLOS:
      return {
        ...state,
        platillos: action.payload,
        loading: false,
        error: ''
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
    case ADD_DATA_ORDENES:
      return {
        ...state,
        myList: []
      }
    case CLEAN_ORDER_LIST:
      return {
        ...state,
        myList: []
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
    */
    default:
      return state
  }
}
export default reducer
