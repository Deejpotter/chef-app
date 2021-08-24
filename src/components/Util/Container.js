import React from "react"

function Container({ children, ext }) {
    let className;
    ext ? className = "container-" + ext : className = "container";
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default Container