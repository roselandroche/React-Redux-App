// import { GET_QUOTE_START, GET_QUOTE_SUCCESS, GET_QUOTE_FAILURE } from '../actions/quote';

// const initialState = {
//     quote: null,
//     isLoading: false,
//     error: null
// }

// export function reducer(state = initialState, action) {
//     switch(action.type) {
//         case GET_QUOTE_START:
//             return {
//                 ...state,
//                 isLoading: true
//             }
//         case GET_QUOTE_SUCCESS:
//             return {
//                 ...state,
//                 quote: action.payload,
//                 isLoading: false
//             }
//         case GET_QUOTE_FAILURE:
//             return {
//                 ...state,
//                 isLoading: false,
//                 error: action.payload
//             }
//         default:
//             return state;
//     }
// }