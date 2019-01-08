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

class Navigation extends React.Component {

    state = {
        isOpen: false
    }

    toggleOpen = () => {
        console.log('toggle')
        this.setState(state => ({
            isOpen: !this.state.isOpen
        }))
    }

    render() {
        return (
            <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">Gastos</NavbarBrand>
                <NavbarToggler onClick={this.toggleOpen}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/categories">Categorías</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            </div>
        )
    }

}

export default Navigation