import { applyMiddleware, combineReducers, createStore } from "redux"
import { cakeReducer } from "./shopReducers/cakeReducer"
import { iceCreamReducer } from "./shopReducers/iceCreamReducer"
import { chocolateReducer } from "./shopReducers/chocolateReducer"
import { divideReducer,multiplyReducer,addReducer,subtractReducer } from "./numberReducers/NumberReducers"
import thunk from "redux-thunk"

const rootReducer=combineReducers({cakeReducer,iceCreamReducer,chocolateReducer,divideReducer,addReducer,multiplyReducer,subtractReducer})
export const store=createStore(rootReducer,applyMiddleware(thunk));