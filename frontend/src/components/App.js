import React from 'react'
import { Router, Route } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

import Navigation from './Navigation'
import HomePage from '../pages/HomePage'
import CategoriesPage from '../pages/CategoriesPage'

const history = createHistory()

class App extends React.Component {

    render() {
        return (
            <Router history={history}>
                <React.Fragment>
                    <Navigation />
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/categories" component={CategoriesPage}/>
                </React.Fragment>
            </Router>
        )
    }
    
}

export default App;