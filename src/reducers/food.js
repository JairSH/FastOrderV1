import { SET_DATA_FOOD } from '../constants'

const initialState = {
    user: {},
    myList: [],
    postres: [
      {
        id: 1,
        name: 'Flan',
        price: '$130',
        description: 'Flan de vainilla'
      },
      {
        id: 2,
        name: 'Gelatina',
        price: '$150',
        description: 'Gelatina de fresa'
      },
      {
        id: 3,
        name: 'Brownie',
        price: '$230',
        description: 'Brownie de chocolate'
      }
    ],
    bebidas: [
      {
        id: 1,
        name: 'Agua',
        price: '$100',
        description: 'Agua natural'
      },
      {
        id: 2,
        name: 'Coca-Cola',
        price: '$120',
        description: 'Refresco sabor cola'
      },
      {
        id: 3,
        name: 'Cerveza',
        price: '$150',
        description: 'Cerveza de barril'
      }
    ],
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
    comidas_api: []
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
        comida_api: action.payload
      }

    default:
      return state
  }
}
export default reducer
