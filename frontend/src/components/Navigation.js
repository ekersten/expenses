import React from 'react'
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Collapse
} from 'reactstrap'

import { Link } from 'react-router-dom'

class Navigation extends React.Component {

    state = {
        isOpen: false
    }

    toggleOpen = () => {
        this.setState(state => ({
            isOpen: !this.state.isOpen
        }))
    }

    render() {
        return (
            <div>
            <Navbar color="dark" dark expand="md">
                <Link to="/" className="navbar-brand">Gastos</Link>
                <NavbarToggler onClick={this.toggleOpen}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <li className="nav-item">
                            <Link to="/categories" className="nav-link">Categorías</Link>
                        </li>
                    </Nav>
                </Collapse>
            </Navbar>
            </div>
        )
    }

}

export default Navigation