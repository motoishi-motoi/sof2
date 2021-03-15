import React from 'react';
import { Link } from 'react-router-dom'
import logoHeader from '../assets/logo/logoHeader.svg';

const Header = () => {

    return (
        <header>
            <div className = 'header-inner'>
                <Link to ='/'>
                    <h1>
                        <img className = 'logoHeader' src = {logoHeader} alt = 'SOF | Search of Flags'/>
                    </h1>
                </Link>
                <nav>
                    <a href = 'https://flaghistory.jp/term/' target='_blank' rel='noopener noreferrer'>旗の用語</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;