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
import Select from 'react-select'
import axios from 'axios'
import moment from 'moment'

class ExpenseForm extends React.Component {

    state = {
        categories: [],
        selectedOption: null
    }

    componentDidMount() {
        axios.get('/api/categories').then(response => {
            this.setState(state => {
                return {categories: response.data.result}
            })
        })
    }

    handleChange = (selectedOption, selectedValue) => {
        console.log(`Option selected:`, selectedOption)
        console.log(`Option selected:`, selectedValue)
        this.setState(state => {
            return {
                selectedOption
            }
        })
    }

    handleCreate = (inputValue) => {
        console.log(inputValue)
    }

    render() {
        const { categories, selectedOption } = this.state
        const today = new Date()
        return (
            <React.Fragment>
                <h1>Expense Form</h1>
                <Form>
                    <FormGroup>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText><i className="far fa-calendar-alt"></i></InputGroupText>
                            </InputGroupAddon>
                            <Input type="date" value={moment().format('YYYY-MM-DD')} placeholder="Fecha" />
                        </InputGroup>
                    </FormGroup>
        
                    <FormGroup>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText><i className="fas fa-coins"></i></InputGroupText>
                            </InputGroupAddon>
                            <Input type="number" min="0.00" placeholder="0.00" step="0.01"/>
                        </InputGroup>
                    </FormGroup>

                    <FormGroup>
                        <Select
                            isClearable
                            onChange={this.handleChange}
                            options={categories.map(category => ({
                                value: category.id,
                                label: category.name
                            }))}
                            selectedOption={selectedOption}
                            placeholder="Categoría"
                        />
                    </FormGroup>

                    <FormGroup>
                        <Input type="textarea" placeholder="Nota"/>
                    </FormGroup>

                    <Button color="primary" block>Guardar</Button>
                    
                </Form>
                
            </React.Fragment>

        )
    }

}

export default ExpenseForm