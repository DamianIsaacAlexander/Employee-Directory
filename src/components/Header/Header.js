import React from "react";
import "./style.css"

function Header(props) {
    return (
        <div className="header">
            <h1 className="header__title">Employee Directory</h1>
            {props.children}
        </div>
    )
}

export default Header;