import React from 'react';
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation(){
    return(
        // a가 아닌 Link를 써야 전체 새로고침이 안되고 바뀐 내용만 변경된다. 
        <nav className="navbar">
            <Link to="/">Main</Link> 
            <Link to="/login">LOG IN</Link> 
            <Link to="/signup">SIGN UP</Link>
            <Link to="/passchange">Pass Change</Link>
        </nav>
    );
}

export default Navigation;