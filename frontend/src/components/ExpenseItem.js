import React from 'react'
import moment from 'moment'
import numeral from 'numeral'
import { Popover, PopoverBody, PopoverHeader, Button } from 'reactstrap'

class ExpenseItem extends React.Component {

    state = {
        popoverOpen: false
    }

    togglePopover = () => {
        this.setState(state => ({
            popoverOpen: !this.state.popoverOpen
        }))
    }

    render() {
        const { expense } = this.props
        return (
            <React.Fragment>
            <tr onClick={this.togglePopover} id={`Expense${expense.id}`}>
                <td>{numeral(expense.amount).format('$0,0.00')}</td>
                <td>{expense.category.name}</td>
                <td>{moment(expense.date).format('DD/MM/YYYY')}</td>
            </tr>
                <Popover placement="top" target={`Expense${expense.id}`} isOpen={this.state.popoverOpen}>
                    <PopoverHeader>{expense.category.name} {numeral(expense.amount).format('$0,0.00')}</PopoverHeader>
                <PopoverBody>
                    {expense.note && (
                        <p>{expense.note}</p>    
                    )}
                    <p><Button color="primary">Editar</Button> <Button color="danger">Borrar</Button></p>
                </PopoverBody>
            </Popover>
            </React.Fragment>
        )
    }
    
}

export default ExpenseItem