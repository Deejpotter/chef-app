import React from "react";
import { Link } from "react-router-dom";

function ButtonLink({ to, children, bg, fg }) {
    return (
        <Link to={to} className={'button-link shadow radius' + ' bg-' + bg + ' fg-' + fg}>
            {children}
        </Link>
    );
}

export default ButtonLink;