export const TOGGLE_EDITING = 'TOGGLE_EDITING';
export const UPDATE_FEELING = 'UPDATE_FEELING';

export function TOGGLE_EDITING() {
    return {
        type: TOGGLE_EDITING    
    };
}

export function UPDATE_FEELING() {
    return {
        type: UPDATE_FEELING,
        payload: feeling
    }
}