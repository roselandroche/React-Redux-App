import axios from 'axios';

export const GET_QUOTE_START = 'GET_QUOTE_START';
export const GET_QUOTE_SUCCESS = 'GET_QUOTE_SUCCESS';
export const GET_QUOTE_FAILURE = 'GET_QUOTE_FAILURE';

export function getQuote() {
    
    return dispatch => {
        dispatch({ type: GET_QUOTE_START});

        axios  
            .get('https://quote-garden.herokuapp.com/quotes/random')
            .then(res => {
                console.log(res.data)
                dispatch({ type: GET_QUOTE_SUCCESS, payload: res.data.quoteText })
            })
            .catch(err => {
                dispatch({ type: GET_QUOTE_FAILURE, payload: err })
            })
    }
}