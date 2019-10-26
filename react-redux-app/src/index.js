import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import { reducer as feelingReducer } from './reducers/feeling';
// import { reducer as quoteReducer } from './reducers/quote';


// const reducer = combineReducers({
//     feeling: feelingReducer
//     quote: quoteReducer
// });

const store = createStore(feelingReducer, applyMiddleware(thunk, logger))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));
