import React from 'react'
import { BiRun } from 'react-icons/bi';
import BackButton from './BackButton'; 
import HomeButton from './HomeButton';

const Header = (props) => {
    if (props.location.pathname === '/') {
        return (
            <header className="header">
                <h1><BiRun/>Fitzilla</h1>
            </header>
        )
    }
    return (
        <header className="header">
                <h1><BiRun/>Fitzilla</h1>
                <BackButton />
                <HomeButton />
        </header>
    )
}

export default Header
