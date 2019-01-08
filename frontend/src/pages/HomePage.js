import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import ExpenseForm from '../components/ExpenseForm'
import ExpenseList from '../components/ExpenseList'

class HomePage extends React.Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <ExpenseForm />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ExpenseList />
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default HomePage