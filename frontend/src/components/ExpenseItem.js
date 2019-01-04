import React from 'react'
import moment from 'moment'
import numeral from 'numeral'

class ExpenseItem extends React.Component {

    render() {
        const { expense } = this.props
        return (
            <tr key={expense.id}>
                <td>{numeral(expense.amount).format('$0,0.00')}</td>
                <td>{expense.category}</td>
                <td>{moment(expense.date).format('DD/MM/YYYY')}</td>
                <td>{expense.note}</td>
            </tr>
        )
    }
    
}