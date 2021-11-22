const userInitialState = {
    isLoading : false,
    data: {},
    errors : {}
}

const userReducer = (state = userInitialState,action) => {
    switch(action.type){
        case 'LOGGED_IN' : {
            return {...state,isLoading: action.payload}
        }
        case 'USER_DATA' : {
            return {...state, data: {...action.payload}}
        }
        case 'LOGGED_OUT' : {
            return {...state,isLoading: action.payload}
        }
        default : {
            return {...state}
        }
    }
}

export default userReducer