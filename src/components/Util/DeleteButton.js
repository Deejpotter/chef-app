import React from "react";

function DeleteButton({ dispatch }) {
    return (
        <button className='shadow radius red' onClick={() => dispatch({ type: 'openModal' })}>
            Delete everything
        </button>
    );
}

export default DeleteButton;