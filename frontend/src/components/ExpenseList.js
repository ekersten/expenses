import React from 'react'
import axios from 'axios'
import numeral from 'numeral'
import moment from 'moment';
import { Table } from 'reactstrap'

class ExpenseList extends React.Component {

    state = {
        expenses: []
    }

    componentDidMount() {
        axios.get('/api/expenses').then((response) => {
            this.setState((state) => {
                return {
                    expenses: response.data
                }
            })
        })
    }

    render() {
        return (
            <React.Fragment>
            <h1>Expense List</h1>
            {this.state.expenses.length > 0 ? (
                <Table striped responsive bordered hover>
                    <thead>
                        <tr>
                            <th>Monto</th>
                            <th>Categoría</th>
                            <th>Fecha</th>
                            <th>Nota</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        {this.state.expenses.map(expense => (
                            <tr key={expense.id}>
                                <td>{numeral(expense.amount).format('$0,0.00')}</td>
                                <td>{expense.category}</td>
                                <td>{moment(expense.date).format('DD/MM/YYYY')}</td>
                                <td>{expense.note}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            ) : (
                <p>No hay gastos</p>
            )}
            </React.Fragment>
        )
    }

}

export default ExpenseList