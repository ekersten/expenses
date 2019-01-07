import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import expensesReducer from '../reducers/expenses'
import categoriesReducer from '../reducers/categories'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            categories: categoriesReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};