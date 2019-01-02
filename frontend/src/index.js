import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import 'bootstrap/dist/css/bootstrap.min.css'

const wrapper = document.getElementById('app')
wrapper ? ReactDOM.render(<App />, wrapper) : null