export const TOGGLE_EDITING = 'TOGGLE_EDITING';
export const UPDATE_FEELING = 'UPDATE_FEELING';

export function toggleEditing() {
    return {
        type: TOGGLE_EDITING    
    };
}

export function updateFeeling(feeling) {
    return {
        type: UPDATE_FEELING,
        payload: feeling
    }
}