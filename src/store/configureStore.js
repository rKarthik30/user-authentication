import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducer/userReducer'
import notesReducer from '../reducer/notesReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        user: userReducer,
        notes: notesReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore