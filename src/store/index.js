import {legacy_createStore as createStore, combineReducers } from "redux";
import {CashReducer, } from "./cashReducer";
import {customerReducer} from "./customerReducer";

const rootReducer = combineReducers({
    cash: CashReducer,
    customers: customerReducer
})

export const store = createStore(rootReducer)
