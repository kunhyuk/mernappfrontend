import React from "react";
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <div>
                    <nav className="nav">
            <Link to="/">
                <span>Home</span>
            </Link>
            <Link to="/login">
                <span>Login</span>
            </Link>
            <Link to="/signup">
                <span>Signup</span>
            </Link>
            <Link to="/user">
                <span>Welcome</span>
            </Link>
        </nav>
        </div>
    )
}

export default Header