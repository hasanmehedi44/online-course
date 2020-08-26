import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <h1>Online Courses</h1>
            <nav>
                <a href="/home">Home</a>
                <a href="/sing-in">Sing in</a>
                <a href="/sing-up">Sing Up</a>
            </nav>
        </div>
    );
};

export default Header;