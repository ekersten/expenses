import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import ExpenseForm from './ExpenseForm'
import ExpenseList from './ExpenseList'
import Navigation from './Navigation'

class App extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Navigation />
                <Container>
                    <Row>
                        <Col>
                            <ExpenseForm/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ExpenseList/>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
    
}

export default App;