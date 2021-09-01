import React from "react";

function Button({ handleClick, children, bg, fg }) {
    return (
        <button className={'shadow radius' + ' bg-' + bg + ' fg-' + fg} onClick={handleClick}>
            {children}
        </button>
    );
}

export default Button;