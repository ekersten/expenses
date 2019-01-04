import axios from 'axios'

// SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

export const startSetExpenses = () => {
    return (dispatch, getState) => {
        return axios.get('/api/expenses').then(response => {
            dispatch(setExpenses(response.data.results))
        })
    };
};