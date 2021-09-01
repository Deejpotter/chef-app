import React from "react";

function DispatchButton({ dispatch, type, children, bg, fg }) {
    return (
        <button className={'shadow radius' + ' bg-' + bg + ' fg-' + fg} onClick={() => dispatch({ type: type })}>
            {children}
        </button>
    );
}

export default DispatchButton;