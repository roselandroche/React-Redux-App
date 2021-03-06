import React, { useState } from 'react';
import { connect } from 'react-redux';
import { toggleEditing, updateFeeling } from '../actions/feeling';


function Feeling (props) {
    const [feeling, setFeeling] = useState();

    const handleEdit = e => {
        e.preventDefault();
        props.toggleEditing();
    }

    const handleSubmit = e => {
        e.preventDefault();
        setFeeling('');
        props.updateFeeling(feeling || props.feeling)
        props.toggleEditing();
    }

    const handleChanges = e => {
        setFeeling(e.target.value);
    }
    return (
        <div>
            {props.editing ? (
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        name='feeling'
                        placeholder='feeling'
                        value={feeling}
                        onChange={handleChanges}
                    />
                    <button type='submit'>Save</button>
                </form>
            ) : (
                <div>
                    <h2>Today I feel:</h2>
                    <h2>{props.feeling}</h2>
                    <button onClick={handleEdit} >Edit</button>
                </div>
            )}
            
        </div>
    )
}

function mapStateToProps(state) {
    return {
        feeling: state.feeling,
        editing: state.editing
    }
}

const mapDispatchToProps = {
    toggleEditing,
    updateFeeling
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Feeling);