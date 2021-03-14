import { 
  SET_DATA_FOOD,
  SET_DATA_BEBIDAS
} from '../constants'

const initialState = {
  user: {},
  myList: [],
  postres: [],
  bebidas: [],
  comidas: [
    {
      id: 1,
      name: 'Picadillo',
      price: '$200',
      description: 'Picadillo con arroz de guarnicion'
    },
    {
      id: 2,
      name: 'Chuletas',
      price: '$200',
      description: 'Chuletas con arroz de guarnicion'
    },
    {
      id: 3,
      name: 'Cortadillo',
      price: '$200',
      description: 'Cortadillo con arroz de guarnicion'
    }
  ],
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
    case SET_DATA_FOOD:
      return {
        ...state,
        postres: action.payload
      }
    case SET_DATA_BEBIDAS:
      return {
        ...state,
        bebidas: action.payload
      }

    default:
      return state
  }
}
export default reducer
