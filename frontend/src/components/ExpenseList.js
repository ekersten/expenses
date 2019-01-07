import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'reactstrap'
import ExpenseItem from './ExpenseItem'

class ExpenseList extends React.Component {

    render() {
        return (
            <React.Fragment>
            <h1>Expense List</h1>
            {this.props.expenses.results && this.props.expenses.results.length > 0 ? (
                <Table striped responsive bordered hover>
                    <thead>
                        <tr>
                            <th>Monto</th>
                            <th>Categoría</th>
                            <th>Fecha</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        {this.props.expenses.results.map(expense => (
                            <ExpenseItem key={expense.id} expense={expense}/>
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

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    }
}

export default connect(mapStateToProps)(ExpenseList)