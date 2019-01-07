import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import axios from 'axios';

import { startSetExpenses } from './actions/expenses'
import { startSetCategories } from './actions/categoeries'

import 'bootstrap/dist/css/bootstrap.min.css'

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

const store = configureStore()

const jsx = (
    <Provider store={store}>
        <App/>
    </Provider>
)

store.dispatch(startSetExpenses())
store.dispatch(startSetCategories())

const wrapper = document.getElementById('app')
wrapper ? ReactDOM.render(jsx, wrapper) : null