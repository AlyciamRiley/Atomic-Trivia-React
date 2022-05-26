import React from 'react';
import ReactDom from 'react-dom';

const Header = props => (
    <div className="navbar bg-light">
        <h1> Atomic Trivia</h1>
        <h2>{props.score}</h2>
    </div>
)

export default Header;


