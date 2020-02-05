import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import manageAnimals from './manageAnimals'

const createRootReducer = history => combineReducers({
    router: connectRouter(history),
    animals: manageAnimals
})

export default createRootReducer;