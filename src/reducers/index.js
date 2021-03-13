const reducer = (state, action) => {
    
    switch(action.type){
        case 'SET_FAVORITE':
            return {
                ...state,
                //aqui se indica el elemento de la informacion que se presentara
                myList: [...state.myList,action.payload]
            }
            
        case 'DELETE_FAVORITE':
            return {
                ...state,
                myList: state.myList.filter(items => items.id !== action.payload)
            }
        case 'LOGIN_REQUEST':
            return {
                ...state,
                user : action.payload
            }
        case 'LOGOUT_REQUEST':
            return {
                ...state,
                user : action.payload
            }
        case 'REGISTER_REQUEST':
            return {
                ...state,
                user : action.payload
            }               
            
        default:
        return state;
    }
}
export default reducer;
