import { TOGGLE_EDITING, UPDATE_FEELING } from '../actions/feeling';

const initialState = {
    feeling: 'neutral',
    editing: false
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
        default:
            return state;
    }
}