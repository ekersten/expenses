import axios from 'axios'

// SET_CATEGORIES
export const setCategories = (categories) => ({
    type: 'SET_CATEGORIES',
    categories
});

export const startSetCategories = () => {
    return (dispatch, getState) => {
        return axios.get('/api/categories').then(response => {
            dispatch(setCategories(response.data))
        })
    };
};