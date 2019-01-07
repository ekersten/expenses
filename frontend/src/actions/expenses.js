import axios from 'axios'

// SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

export const startSetExpenses = () => {
    return (dispatch, getState) => {
        return axios.get('/api/expenses').then(response => {
            dispatch(setExpenses(response.data))
        })
    };
};

export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})

export const startAddExpense = (expense) => {
    return (dispatch, getState) => {
        return axios.post('/api/expenses/', expense).then(response => {
            console.log(response)
            dispatch(addExpense(response.data))
        })
    }
}