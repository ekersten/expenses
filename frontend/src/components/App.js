import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import ExpenseForm from './ExpenseForm'
import ExpenseList from './ExpenseList'

class App extends React.Component {

    render() {
        return (
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
        )
    }
    
}

export default App;