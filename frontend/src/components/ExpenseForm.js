import React from 'react'
import {
    Form,
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Button
} from 'reactstrap'
import { connect } from 'react-redux'
import Select from 'react-select'
import axios from 'axios'
import moment from 'moment'

import { startAddExpense } from '../actions/expenses'

class ExpenseForm extends React.Component {

    state = {
        category_id: undefined,
        date: moment().format('YYYY-MM-DD'),
        amount: undefined,
        note: undefined,
        selectedOption: undefined
    }

    handleCategoryChange = (e) => {
        const category_id = e.value
        this.setState(state => {
            return {
                category_id,
                selectedOption: e
            }
        })
    }

    handleAmountChange = (e) => {
        const amount = parseFloat(e.target.value)
        this.setState(state => {
            return {
                amount
            }
        })
    }

    handleNoteChange = (e) => {
        const note = e.target.value
        this.setState(state => {
            return {
                note
            }
        })
    }

    handleDateChange = (e) => {
        const date = e.target.value
        this.setState(state => {
            return {
                date
            }
        })
    }

    handleSubmit = () => {
        this.props.startAddExpense({
            category: this.state.category_id,
            amount: parseFloat(this.state.amount),
            note: this.state.note,
            date: this.state.date
        })
    }

    render() {
        const { selectedOption } = this.state
        return (
            <React.Fragment>
                <h1>Expense Form</h1>
                <Form>
                    <FormGroup>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText><i className="far fa-calendar-alt"></i></InputGroupText>
                            </InputGroupAddon>
                            <Input id="date" type="date" value={this.state.date} placeholder="Fecha" onChange={this.handleDateChange} />
                        </InputGroup>
                    </FormGroup>
        
                    <FormGroup>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText><i className="fas fa-coins"></i></InputGroupText>
                            </InputGroupAddon>
                            <Input id="amount" type="text" placeholder="0.00" onChange={this.handleAmountChange}/>
                        </InputGroup>
                    </FormGroup>

                    <FormGroup>
                        {this.props.categories.results && this.props.categories.results.length > 0 ? (
                            <Select
                                id="date"
                                isClearable
                                onChange={this.handleCategoryChange}
                                options={this.props.categories.results.map(category => ({
                                    value: category.id,
                                    label: category.name
                                }))}
                                selectedOption={selectedOption}
                                placeholder="Categoría"
                            />
                        ) : (
                            null
                        )}
                        
                    </FormGroup>

                    <FormGroup>
                        <Input type="textarea" id="note" placeholder="Nota" onChange={this.handleNoteChange}/>
                    </FormGroup>

                    <Button color="primary" block onClick={this.handleSubmit}>Guardar</Button>
                    
                </Form>
                
            </React.Fragment>

        )
    }

}

const mapStateToProps = (state) => {
    return {
        categories: state.categories
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm)