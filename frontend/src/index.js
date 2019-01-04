import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

import { startSetExpenses } from './actions/expenses'

import 'bootstrap/dist/css/bootstrap.min.css'

const store = configureStore()

const jsx = (
    <Provider store={store}>
        <App/>
    </Provider>
)

store.dispatch(startSetExpenses())

const wrapper = document.getElementById('app')
wrapper ? ReactDOM.render(jsx, wrapper) : null