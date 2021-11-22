const notesInitialState = [] 

const notesReducer = (state = notesInitialState,action) => {
    switch(action.type){
        case 'NEW_NOTE' : {
            return [...state,[...action.payload]]
        }
        case 'SET_NOTE' :{
            return [...state,[...action.payload]]
        }

        case 'REMOVE_ITEM' : {
            const result = state.filter((note) => {
                if(note._id !== action.payload){
                    return true;
                }
            })
            return{
                ...state,...result
            }
        }
        default : {
            return [...state]
        }
    }
}