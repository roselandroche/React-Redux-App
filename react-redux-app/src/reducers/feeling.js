import { TOGGLE_EDITING, UPDATE_FEELING } from '../actions/feeling';
import { GET_QUOTE_START, GET_QUOTE_SUCCESS, GET_QUOTE_FAILURE } from '../actions/quote';

const initialState = {
    feeling: 'neutral',
    editing: false,
    quote: 'Default value',
    isLoading: false,
    error: null
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_EDITING:
            return {
                ...state,
                editing: !state.editing
            };
        case UPDATE_FEELING:
            return {
                ...state,
                feeling: action.payload
            };
        case GET_QUOTE_START:
            return {
                ...state,
                isLoading: true
            }
        case GET_QUOTE_SUCCESS:
            return {
                ...state,
                quote: action.payload,
                isLoading: false
            }
        case GET_QUOTE_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}