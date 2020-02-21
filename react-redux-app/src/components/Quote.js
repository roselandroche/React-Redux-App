import React from 'react';
import { connect } from 'react-redux';

function Quote(props) {
    return (
        <div className='quote'>
            <h3>Quote of the Day: {props.quote}</h3>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        quote: state.quote
    }
}

export default connect(
    mapStateToProps
)(Quote);