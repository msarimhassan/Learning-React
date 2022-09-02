import React from 'react';
import '../styles/Header.css';

const Header = ({ title }) => {
    return (
        <div className='header'>
            <h1>
                Demo of <span className='hightlighted-text'>{title}</span>
            </h1>
        </div>
    );
};

export default Header;
