import React from 'react';

import logoHeader from '../assets/logo/logoHeader.svg';

const Header = () => {

    return (
        <header>
            <div className = 'header-inner'>
                <h1>
                    <img className = 'logoHeader' src = {logoHeader} alt = 'SOF | Search of Flags'/>
                </h1>
                <nav>
                    <a href = 'https://flaghistory.jp/' target='_blank' rel='noopener noreferrer'>FlagHistory</a>
                    <a href = 'https://flaghistory.jp/term/' target='_blank' rel='noopener noreferrer'>旗の用語</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;