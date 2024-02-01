import React from 'react'
import Logo from './headers/Logo';
import Menu from './headers/Menu';
import Sns from './headers/Sns';

const Header = () => {
    return (
        <header id='header' role='banner'>
            <Logo />
            <Menu />
            <Sns />
        </header>
    )
}

export default Header
